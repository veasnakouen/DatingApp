import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  // @Input() usersFromHomeComponent:any;
  @Output() cancelRegister = new EventEmitter();
  model:any = {};

  constructor(
    private accountService:AccountService,private toastr:ToastrService
  ) { }

  ngOnInit(): void {

  }
  register(){
    this.accountService.register(this.model).subscribe(response =>{
      console.log(response);
      this.cancel();
    },error=>{
      console.log(error);
      this.toastr.error(error.error);
    })
  }
  cancel(){
    // want cancel to emit false we want to turn off registerMode in the HomeComponent
    this.cancelRegister.emit(false);
  }
}
