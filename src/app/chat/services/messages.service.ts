import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

export class Message {
  constructor(public id: number) { }
}

const CHAT = [
  new Message(1),
  new Message(2),
  new Message(3),
  new Message(4),
  new Message(5),
  new Message(6),
  new Message(7),
  new Message(8),
  new Message(9),
  new Message(10)
];

@Injectable()
export class MessagesService {
  getHeroes() { return Observable.of(CHAT); }

  getHero(id: number | string) {
    return this.getHeroes()
      // (+) before `id` turns the string into a number
      .map(heroes => heroes.find(hero => hero.id === +id));
  }
}