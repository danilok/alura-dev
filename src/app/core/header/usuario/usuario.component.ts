import { Component, Input, OnInit } from '@angular/core';

import { UserService } from '../../user/user.service';
import { User } from '../../user/user';

@Component({
  selector: 'app-ad-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: [ './usuario.component.css' ]
})
export class UsuarioComponent implements OnInit {

  @Input() pos: string;

  private classHeader = 'cabecalho__usuario';
  private classNav = 'cabecalho__nav-usuario';
  class: string = this.classHeader;
  user: User;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.user = this.userService.getUser();
    if (this.pos === 'nav') {
      this.class = this.classNav;
    } else {
      this.class = this.classHeader;
    }
  }

}
