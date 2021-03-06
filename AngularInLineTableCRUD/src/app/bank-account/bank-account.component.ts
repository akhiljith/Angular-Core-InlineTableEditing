import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BankAccountService } from '../shared/bank-account.service';
import { BankService } from '../shared/bank.service';

@Component({
  selector: 'app-bank-account',
  templateUrl: './bank-account.component.html',
  styleUrls: ['./bank-account.component.css']
})
export class BankAccountComponent implements OnInit {

  bankAccountForms:FormArray = this.fb.array([]);
  bankList = [];
  notification = null;
  constructor(private fb: FormBuilder, private bankService:BankService, private service:BankAccountService) { }

  ngOnInit() {
    this.bankService.getBankList().subscribe(res=>this.bankList=res as []);
    this.getBankAccountList();

  }
addBankAccountForms(){ 
  if(this.bankAccountForms.controls.findIndex(item=>item.get("bankAccountID").value ===0) < 0)
  {
  this.bankAccountForms.push(this.fb.group({
    bankAccountID:[0],
    accountNumber:['',Validators.required],
    accountHolder:['',Validators.required],
    bankID:[0,Validators.min(1)],
    IFSC:['',Validators.required] 
  }));
}
}

getBankAccountList()
{
  this.service.getBankAccountList().subscribe(
    res => {
      if(res==[])
      {
        this.addBankAccountForms();
      }
      else{
        (res as []).forEach((bankAccount:any) => {
          this.bankAccountForms.push(this.fb.group({
            bankAccountID:[bankAccount.bankAccountID],
            accountNumber:[bankAccount.accountNumber,Validators.required],
            accountHolder:[bankAccount.accountHolder,Validators.required],
            bankID:[bankAccount.bankID,Validators.min(1)],
            IFSC:[bankAccount.iFSC,Validators.required] 
          }));
        });
      }
    }
  );
}

recordSubmit(fg:FormGroup){
  if(fg.get("bankAccountID").value == 0)
  {
    this.service.postBankAccount(fg.value)
    .subscribe((res:any)=> {
    fg.patchValue({bankAccountID:res.bankAccountID});
    this.showNotification('insert');
    });
  }
  else
  {
    this.service.putBankAccount(fg.value)
    .subscribe((res:any)=> {
      this.showNotification('update');
    });
  }
}

deleteRecord(fg:FormGroup,index:any)
{
  if(fg.get("bankAccountID").value == 0)
  {
    this.bankAccountForms.removeAt(index);
  }
  else if(confirm("Are you sure to delete this record?"))
  {
  this.service.deleteBankAccount(fg.get("bankAccountID").value)
    .subscribe((res:any)=> {
     this.bankAccountForms.removeAt(index);
     this.showNotification('delete');
    });
}
}

showNotification(type)
{
  switch(type)
  {
    case 'insert': 
    this.notification = {class:'text-success' , message:'saved!'};
    break;
    case 'update': 
    this.notification = {class:'text-primary' , message:'updated!'};
    break;
    case 'delete': 
    this.notification = {class:'text-danger' , message:'deleted!'};
    break;
    default: 
    break;
  }
  setTimeout(()=>{this.notification = null; },3000);
}
}
 