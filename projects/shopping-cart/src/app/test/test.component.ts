import { Component, OnInit } from '@angular/core';

import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  @Output() test = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

}
