import { Component,  OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ad-nav',
  templateUrl: './nav.component.html',
  styleUrls: [
    '../home.css',
    './nav.component.css'
  ]
})
export class NavComponent implements OnInit {

  comunidade = false;
  editor = false;
  admin = false;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.url.subscribe((urlSegment) => {
      const rota = urlSegment[0].path;
      switch (rota) {
        case 'editor':
          this.editor = true;
          this.comunidade = !this.editor;
          this.admin = !this.editor;
          break;
        case 'comunidade':
          this.comunidade = true;
          this.editor = !this.comunidade;
          this.admin = !this.comunidade;
          break;
        case 'admin':
          this.admin = true;
          this.editor = !this.admin;
          this.comunidade = !this.admin;
          break;
      }
    });
  }
}
