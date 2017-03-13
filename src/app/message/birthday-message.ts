import {Message} from './message';

export class BirthdayMessage extends Message {
  gift: string = '';

  constructor(values: Object = {}) {
    super(values);
    Object.assign(this, values);
  }
}
