export class Gift {
  id: number;
  title: string;
  description: string;
  image: string;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
