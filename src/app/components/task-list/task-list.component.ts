import { Component, Input, OnInit } from '@angular/core';
import Task from '../../types';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css'],
})
export class TaskListComponent implements OnInit {
  @Input() items!: Task[];
  @Input() title!: string;
  constructor() {}
  ngOnInit(): void {}
}
