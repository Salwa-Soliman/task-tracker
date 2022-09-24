import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  @Output() onToggleEmitter = new EventEmitter();
  @Input() btnText: string = '';
  title = 'Task Tracker';
  constructor() {}

  ngOnInit(): void {}

  toggleViewHandler() {
    this.onToggleEmitter.emit();
  }
}
