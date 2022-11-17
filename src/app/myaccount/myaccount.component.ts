import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-myaccount',
  templateUrl: './myaccount.component.html',
  styleUrls: ['./myaccount.component.scss']
})
export class MyaccountComponent implements OnInit {
  public user : string | null = 'user1';
  public email : string | null = 'user1@email.com';

  constructor(private router : Router) { }

  public logout() : void {
    this.router.navigate(['/']);
  }

  ngOnInit(): void {
    let localUser = localStorage.getItem('user');
    let localEmail = localStorage.getItem('email');
    
    if (localUser && localEmail) {
      this.user = localUser;
      this.email = localEmail;
    }
  }

}
