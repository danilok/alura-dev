import { Component, EventEmitter, Input, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';
import { NavigationEnd, NavigationError, NavigationStart, Router, Event } from '@angular/router';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-ad-input-busca',
  templateUrl: './input-busca.component.html',
  styleUrls: ['input-busca.component.css']
})
export class InputBuscaComponent implements OnInit, OnDestroy {
  @Input() exibeBusca = false;
  @Input() value = '';
  @Output() typing = new EventEmitter<string>();
  debounce: Subject<string> = new Subject<string>();

  constructor(
    private router: Router
  ) {
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        this.value = '';
      }
    });
  }

  ngOnInit(): void {
    this.debounce
      .pipe(debounceTime(300))
      .subscribe(filter => this.typing.emit(filter));
  }

  ngOnDestroy(): void {
    this.debounce.unsubscribe();
  }

}
