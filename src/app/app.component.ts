import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = '';
  isAddingTask = false;
  btnText: string = 'Add Task';

  onToggleHandler() {
    this.isAddingTask = !this.isAddingTask;

    this.btnText = this.isAddingTask ? 'Track your Tasks' : 'Add Task';
  }
}
