import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-submain',
  imports: [],
  templateUrl: './submain.component.html',
  styleUrl: './submain.component.css'
})
export class SubmainComponent {
  @Input() childMessage: string | undefined;
  @Output() messageEvent = new EventEmitter<string>();
  subMain_sample = 'Yaay'

  sendMessageToParent() {
    this.messageEvent.emit("Hello from child")
  }

  testt() {
    this.subMain_sample = 'bye'
  }

}
