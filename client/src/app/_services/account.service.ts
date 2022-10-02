import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UrlSerializer } from '@angular/router';
import { ReplaySubject } from 'rxjs';
import {map}from 'rxjs/operators';
import { User } from '../_models/user';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
//  1.service are Injectable
//  2.service are singleton
//  the data that we store in the service doesn't destroy untill we close down
// component difference when we move from a component to component,they are destroy as soon as they're not use
  baseUrl = 'https://localhost:5001/api/';
  //ReplaySubjec : a kind of observeable

  private currentUserSource = new ReplaySubject<User>(1);//this mean we want to store one(current user) in the localstrage
  currentUser$ = this.currentUserSource.asObservable();


  constructor(private http:HttpClient) {}

  login(model:any){
    return this.http.post(this.baseUrl + 'account/login',model).pipe(
      //map is rxjs operator
      map((response:User) =>{
        const user =  response;
        if(user){
          localStorage.setItem('user',JSON.stringify(user));
          this.currentUserSource.next(user);
        }
      })
    );
  }
  //help method
  setCurrentUser(user:User){
    this.currentUserSource.next(user);
  }
  //
  register(model:any){
    return this.http.post(this.baseUrl+'account/register',model).pipe(
      map((user:User)=>{
        if(user){
          localStorage.setItem('user',JSON.stringify(user));
          this.currentUserSource.next(user);
        }
      })

    )
  }
//
  logout(){
    localStorage.removeItem('user');
    this.currentUserSource.next(null);
  }
}
