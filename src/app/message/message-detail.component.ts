import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import { Message } from './message';
import { BirthdayMessage } from './birthday-message';
import { ChildBirthMessage } from './child-birth-messafe';
import { Gift } from './gift';
import { MessageService } from './message.service';
import { GiftService } from './gift.service';
import { BABYNAMES } from './mock-babynames';

@Component({
  selector: 'message-detail',
  templateUrl: './message-detail.component.html',
  styleUrls: [ './message-detail.component.css' ],
  providers: [MessageService, GiftService],
})

export class MessageDetailComponent implements OnInit {
  @Input() message;

  gifts: Gift[];
  babynames: string[] = [];
  nameCtrl: FormControl = new FormControl();
  filteredNames: any;

  constructor(
    private giftService: GiftService,
    private messageService: MessageService
  ) {}

  filterNames(val: string) {
    return val ? this.babynames.filter((s) => new RegExp(val, 'gi').test(s)) : this.babynames;
  }

  getGifts(): void {
    this.giftService.getGifts().then(gifts => this.gifts = gifts);
  }

  ngOnInit(): void {
    this.getGifts();
    this.babynames = BABYNAMES;
    this.filteredNames = this.nameCtrl.valueChanges
        .startWith(null)
        .map(name => this.filterNames(name));
  }

  saveMessage(message: Message): void {
    this.messageService.messageProcessed(message);
  }

  selectedGift(title: string): Gift {
    let g = this.gifts.filter(g => g.title === title);
    return g[0];
  }
}
