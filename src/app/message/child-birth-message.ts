import {Message} from './message';

export class ChildBirthMessage extends Message {
  babyname: string = '';
  birthdate: Date;

  constructor(values: Object = {}) {
    super(values);
    Object.assign(this, values);
  }
}
