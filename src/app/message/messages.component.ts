import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Message } from './message';
import { BirthdayMessage } from './birthday-message';
import { ChildBirthMessage } from './child-birth-messafe';
import { MessageService } from './message.service';

@Component({
  selector: 'messages',
  templateUrl: './messages.component.html',
  styleUrls: [ './messages.component.css' ],
  providers: [MessageService],
})
export class MessagesComponent<T extends Message> implements OnInit {
  messages = [];
  selectedMessage;
  processState = false;

  constructor(private messageService: MessageService) {}

  getMessages(): void {
    this.messageService.getMessages().then(messages => this.messages = this.messageService.loadMeesageForType(messages));
    console.log("message", this.messages)
  }

  ngOnInit(): void {
    this.getMessages();
  }

  onSelect(message): void {
    this.selectedMessage = message;
  }

  changeProcessState(state: boolean): void {
    this.processState = state;
  }

  processedCount(): number {
    let m = this.messages.filter(message => message.processed === true);
    return m.length;
  }
}
