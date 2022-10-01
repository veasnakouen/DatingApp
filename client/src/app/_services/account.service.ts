import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
//  1.service are Injectable
//  2.service are singleton
//  the data that we store in the service doesn't destroy untill we close down
// component difference when we move from a component to component,they are destroy as soon as they're not use
  baseUrl = 'https://localhost:5001/api/'
  constructor(private http:HttpClient) { }

  login(model:any){
    return this.http.post(this.baseUrl + 'account/login',model);
  }
}
