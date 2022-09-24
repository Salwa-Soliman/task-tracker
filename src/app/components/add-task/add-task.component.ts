import { Component, OnInit } from '@angular/core';
import Task from './../../types';
import { TaskService } from './../../services/task.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css'],
})
export class AddTaskComponent implements OnInit {
  inputValue: string = '';

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {}
  onSubmit() {
    if (this.inputValue.trim()) {
      const newTask: Task = {
        id: new Date().getTime().toString(),
        title: this.inputValue,
        isCompleted: false,
      };
      this.taskService.addTask(newTask).subscribe((data) => console.log(data));
    }
  }
}
