import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { MessageService } from './message.service';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class HeroService {

  /** GET heroes from the server */
  getHeroes(): Observable<Hero[]> {
  return this.http.get<Hero[]>(this.heroesUrl)
}

  getHero(id: number): Observable<Hero> {
    // For now, assume that a hero with the specified `id` always exists.
    // Error handling will be added in the next step of the tutorial.
    const hero = HEROES.find(h => h.id === id) as Hero;
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(hero);
  }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
  this.messageService.add(`HeroService: ${message}`);
}

  private heroesUrl = 'api/heroes';  // URL to web api

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }
}
    