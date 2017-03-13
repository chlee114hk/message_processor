import { Gift } from './gift';
import { GIFTS } from './mock-gifts';
import { Injectable } from '@angular/core';

@Injectable()
export class GiftService {

  // Simulate GET /gifts
  getGifts(): Promise<Gift[]> {
    return Promise.resolve(GIFTS);
  }

}
