import { Component, OnInit } from '@angular/core';
import Task, { List } from '../../types';
import { TaskService } from './../../services/task.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css'],
})
export class TaskListComponent implements OnInit {
  tasks!: Task[];
  lists!: List[];

  constructor(private taskService: TaskService) {
    console.log('ctor');
  }

  ngOnInit(): void {
    console.log('init task list');

    this.taskService.getTasks().subscribe((data) => {
      this.tasks = data;
      this.lists = this.filterTaskLists(this.tasks);
    });
  }

  deleteTaskHandler(task: Task) {
    this.taskService.deleteTask(task.id).subscribe((_) => {
      this.tasks = this.tasks.filter((element) => element.id !== task.id);
      this.lists = this.filterTaskLists(this.tasks);
    });
  }

  updateTaskHandler(task: Task) {
    this.taskService.updateTask(task).subscribe((_) => {
      this.lists = this.filterTaskLists(this.tasks);
    });
  }

  filterTaskLists(tasks: Task[]) {
    const lists = [
      {
        title: 'completed',
        items: tasks.filter((task) => task.isCompleted),
      },
      {
        title: 'ongoing',
        items: tasks.filter((task) => !task.isCompleted),
      },
    ];
    return lists;
  }
}
