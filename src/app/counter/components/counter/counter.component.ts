import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `<h1>

  <h3>
    Counter: {{counter}}
  </h3>


  <button (click)="increaseBy(+1)">+1</button>
  <button (click)="reset()">Reset</button>
  <button (click)="increaseBy(-1)">-1</button>


  </h1>`
})

export class CounterComponent {
  constructor() { }

  public counter: number = 10;

  reset(): void {
    this.counter = 10;
  }

  increaseBy(value: number): void {
    this.counter += value;
  }

}
