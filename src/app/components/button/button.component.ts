import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent implements OnInit {
  @Input() text!: string;
  @Input() classes!: string;
  // btnClasses: string = `btn ${this.classes}`;
  @Output() onClick = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  onClickHandler() {
    this.onClick.emit();
  }
}
