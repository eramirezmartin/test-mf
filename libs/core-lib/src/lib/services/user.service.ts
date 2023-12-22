import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  users: string[] = [];
  constructor() {
    console.info('constructor USERS');
  }

  setUsers(): void {
    this.users = ['lola', 'pepe'];
    console.info('set USERS', this.users);
  }
}
