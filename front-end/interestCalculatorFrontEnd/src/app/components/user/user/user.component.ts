import { Component } from '@angular/core';

import cookie from 'cookiejs';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent {
  constructor(private router: Router) {}
  login() {}

  logout() {
    cookie.remove('access_token');
    open('');
  }
}
