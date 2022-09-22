import { Component, OnInit } from '@angular/core';
import Task from '../../types';
import { TASKS } from '../../mock-tasks';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
})
export class TasksComponent implements OnInit {
  lists = [
    {
      title: 'completed',
      items: TASKS.filter((task) => task.isCompleted),
    },
    {
      title: 'ongoing',
      items: TASKS.filter((task) => !task.isCompleted),
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
