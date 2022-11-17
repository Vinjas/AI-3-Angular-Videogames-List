import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  public name : string;
  public password: string;
  public passwordConfirm: string;
  public email: string;

  constructor(private router : Router) { }

  public register() : void {
    localStorage.setItem('user', this.name);
    localStorage.setItem('password', this.password);
    localStorage.setItem('email', this.email);

    this.router.navigate(['/home'])
  }

  ngOnInit(): void {
  }

}
