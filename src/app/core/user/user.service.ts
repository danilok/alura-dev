import { Injectable } from '@angular/core';

import { User } from './user';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class UserService {

  private user: User = {
    id: 1,
    name: 'Challenger',
    imagemUrl: 'https://picsum.photos/32',
    email: 'alura-challenge@alura.com.br'
  }

  constructor() { }

  getUser(): User {
    return this.user;
  }

}
