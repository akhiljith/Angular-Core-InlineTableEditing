import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder } from '@angular/forms';
import { BankService } from '../shared/bank.service';

@Component({
  selector: 'app-bank-account',
  templateUrl: './bank-account.component.html',
  styleUrls: ['./bank-account.component.css']
})
export class BankAccountComponent implements OnInit {

  bankAccountForms:FormArray = this.fb.array([]);
  bankList = [];
  constructor(private fb: FormBuilder, private bankService:BankService) { }

  ngOnInit() {
    this.addBankAccountForms();
    this.bankService.getBankList().subscribe(res=>this.bankList=res as []);
  }
addBankAccountForms(){
  this.bankAccountForms.push(this.fb.group({
    bankAccountID:[0],
    accountNumber:[''],
    accountHolder:[''],
    bankID:[0],
    IFSC:[''] 
  }));
}
}
