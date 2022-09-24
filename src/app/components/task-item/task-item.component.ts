import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import Task from './../../types';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css'],
})
export class TaskItemComponent implements OnInit {
  @Input() task!: Task;
  @Output() onDeleteEmitter: EventEmitter<Task> = new EventEmitter();
  @Output() onUpdateEmitter: EventEmitter<Task> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  onDelete(task: Task) {
    this.onDeleteEmitter.emit(task);
  }

  onUpdate(task: Task) {
    this.task.isCompleted = !this.task.isCompleted;
    this.onUpdateEmitter.emit(this.task);
  }
}
