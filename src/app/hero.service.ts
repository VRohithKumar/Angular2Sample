import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';

import {MessageService} from './message.service';
import { HeroesComponent } from './heroes/heroes.component';

@Injectable()
export class HeroService {

  constructor(private MessageService:MessageService) { }
  getHeroes():Observable<Hero[]>{ // hero[] is a class 
    
    this.MessageService.add('HeroService: fetched heroes');
    return of(HEROES);
  }
}
