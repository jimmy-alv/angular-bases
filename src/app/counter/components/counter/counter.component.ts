import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <h3>Counter: {{ counter }}</h3>
    <button (click)="increaseBy(1)" class="btn btn-outline-primary me-2">
      +1
    </button>
    <button (click)="resetCounter()" class="btn btn-outline-primary me-2">
      Reset
    </button>
    <button (click)="increaseBy(-1)" class="btn btn-outline-primary">
      -1
    </button>
  `,
})
export class CounterComponent {
  public counter: number = 10;

  increaseBy(value: number): void {
    this.counter += value;
  }

  resetCounter(): void {
    this.counter = 10;
  }
}
