import { Component, OnInit } from '@angular/core';

import { HEROES } from "../mock-heroes";
import { Hero } from '../hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  selectedHero: Hero;

  heroes = HEROES;

  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  }

  constructor() { }

  ngOnInit(): void {
  }

  onSelect(hero: Hero){
    this.selectedHero = hero;
  }

}
