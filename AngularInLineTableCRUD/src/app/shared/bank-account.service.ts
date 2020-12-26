import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BankAccountService {

  constructor(private http: HttpClient) {  }
  
  postBankAccount(formData)
  {
    return this.http.post(environment.apiBaseUrl+'/BankAccount',formData);
  }

   getBankAccountList()
  {
    return this.http.get(environment.apiBaseUrl+'/BankAccount');
  }

  putBankAccount(formData)
  {
    return this.http.put(environment.apiBaseUrl+'/BankAccount',formData);
  }

  deleteBankAccount(id)
  {
    return this.http.delete(environment.apiBaseUrl+'/BankAccount/'+id);
  }
}
