import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public name : string;
  public password : string;
  public error : string;

  constructor(private router: Router) { }

  public login() : void {
    let localUser = localStorage.getItem('user');
    let localPassword = localStorage.getItem('password');
    
    if (this.name === "user1" && this.password === "1234" 
    || this.name === localUser && this.name === localPassword) {
      this.router.navigate(['/home']);
    }
    else {
      this.error = "Invalid credentials. Try 'user1' and '1234'";
    }
  }

  ngOnInit(): void {
    this.name = "user1";
    this.password = "1234";
  }

}
