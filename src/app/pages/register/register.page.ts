import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
    lname: string=""
    Fname: string=""
    email: string=""
    ville: string=""
    password: string=""
    confirm: string=""

  constructor() { }

  ngOnInit() {
  }
  register()
  {
  const{lname,Fname,email,ville,password,confirm}=this
  if(password!==confirm)
  {
  return console.error("password don't match")
  }
  }

}
