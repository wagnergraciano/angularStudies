import { Component, OnInit, Input } from '@angular/core';

import { Hero } from '../hero';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss']
})
export class HeroDetailComponent implements OnInit {

  // Make hero property avaliable for binding from parent componentFactoryName(hero)
  @Input() hero: Hero;

  constructor() { }

  ngOnInit(): void {
  }

}
