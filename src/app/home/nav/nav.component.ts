import { Component,  OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap, UrlTree, PRIMARY_OUTLET, UrlSegmentGroup, UrlSegment } from '@angular/router';

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

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.url.subscribe((urlSegment) => {
      const rota = urlSegment[0].path;
      switch (rota) {
        case 'editor':
          this.editor = true;
          this.comunidade = !this.editor;
          break;
        case 'comunidade':
          this.comunidade = true;
          this.editor = !this.comunidade;
          break;
      }
    });
  }
}
