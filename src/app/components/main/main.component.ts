import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SubmainComponent } from '../submain/submain.component';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-main',
  imports: [FormsModule, CommonModule, SubmainComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {
  firstName = "Sourav"
  dataFromChild: string = ""

  parentMessage = "Hello from parent"

  receiveMessage(message: string) {
    console.log("Received from child", message);
    this.dataFromChild = message
  }
}
