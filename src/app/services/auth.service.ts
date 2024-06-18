import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  isAuthorize: boolean = false

  get state() {
    return this.isAuthorize
  }

  logIn() {
    this.isAuthorize = true;
  }

  logOut() {
    this.isAuthorize = false
  }
}
