import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent implements OnInit {
  @Input() text!: string;
  @Input() classes!: string;
  @Output() onClick = new EventEmitter();
  // btnClasses: string = `btn ${this.classes}`;

  constructor() {}

  ngOnInit(): void {}

  onClickHandler() {
    this.onClick.emit();
  }
}
