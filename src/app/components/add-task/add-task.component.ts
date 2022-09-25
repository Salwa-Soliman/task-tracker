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
  isAddedSuccessfully: boolean = false;
  timer: any = null;

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {}

  onSubmit() {
    this.isAddedSuccessfully = false;
    this.timer = null;
    if (this.inputValue.trim()) {
      const newTask: Task = {
        id: new Date().getTime().toString(),
        title: this.inputValue.trim(),
        isCompleted: false,
      };

      this.taskService.addTask(newTask).subscribe((data) => {
        this.inputValue = '';
        this.isAddedSuccessfully = true;
        this.timer = this.setTimer(3000);
      });

      return;
    }
    alert("Can't add an empty task!");
  }

  setTimer(time: number) {
    const timer = setTimeout(() => {
      clearTimeout(timer);
      this.isAddedSuccessfully = false;
    }, time);
    return timer;
  }
}
