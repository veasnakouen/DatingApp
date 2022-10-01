import { ConditionalExpr } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../_models/user';
import { AccountService } from '../_services/account.service';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  model:any = {};
  // loggedIn:boolean;
  currentUser$:Observable<User>;

  constructor(private accountService:AccountService) { }
  //we also can user accountService Directly without assign to currentUser$
  //by using *public* keyword infront of the service*accountService
  //then in template we call=> accountService.currentUser$

  ngOnInit(): void {
    // this.getCurrentUser();
    this.currentUser$ = this.accountService.currentUser$;
  }
  login(){
    this.accountService.login(this.model).subscribe(response=>
      {
        // this.loggedIn = true;
      },error=>{
        console.log(error);
      });
  }
  logout(){
    this.accountService.logout();
      // this.loggedIn = false;
  }
  // getCurrentUser(){
  //   this.accountService.currentUser$.subscribe(user=>{
  //     // "!!" : turn object to boolean.
  //     // this.loggedIn = !!user;
  //   },error=>{
  //     console.log(error);
  //   });
  // }
}
