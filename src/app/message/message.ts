export class Message {
  id: number;
  name: string;
  type: string;
  processed: boolean = false;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
