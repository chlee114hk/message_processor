import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'processed',
  pure: false
})
export class MessageProcessStatePipe implements PipeTransform {
  transform(allMessages: any[], processState: boolean) {
    return allMessages.filter(message => message.processed == processState);
  }
}
