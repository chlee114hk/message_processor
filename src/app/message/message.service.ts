import { Message } from './message';
import { BirthdayMessage } from './birthday-message';
import { ChildBirthMessage } from './child-birth-message';
import { MESSAGES } from './mock-messages';
import { Injectable } from '@angular/core';

@Injectable()
export class MessageService {

  //messages: Message[] = [];

  // Simulate GET /messages
  getMessages<T extends Message>(): Promise<T[]> {
    return Promise.resolve(MESSAGES);
  }

  messageProcessed(message: Message) {
    message.processed = true;
    console.log('m', message)
    return message;
  }

  loadMeesageForType<T extends Message>(messages: T[]): Message[] {
    let msgs:Message[] = [];
    messages.forEach(
      message => {
        switch(message.type) {
          case 'BirthdayMessage':
            msgs.push(new BirthdayMessage(message));
            break;
          case 'ChildBirthMessage':
            msgs.push(new ChildBirthMessage(message));
            break;
          default:
            msgs.push(new Message(message));
            break;
        }
      }
    )
    return msgs;
  }

}
