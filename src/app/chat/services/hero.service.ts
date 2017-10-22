import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

export class Hero {
  constructor(public id: number, public name: string) { }
}

const HEROES = [
  new Hero(1, 'Mr. Nice'),
  new Hero(2, 'Narco'),
  new Hero(3, 'Bombasto'),
  new Hero(4, 'Celeritas'),
  new Hero(5, 'Magneta'),
  new Hero(6, 'RubberMan')
];

@Injectable()
export class HeroService {
  getHeroes() { return Observable.of(HEROES); }

  getHero(id: number | string) {
    return this.getHeroes()
      // (+) before `id` turns the string into a number
      .map(heroes => heroes.find(hero => hero.id === +id));
  }
}