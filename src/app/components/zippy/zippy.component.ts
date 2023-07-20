import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { customIncrement, decrement, increament, reset } from 'src/app/shared/store/counter.actions';

@Component({
  selector: 'zippy',
  templateUrl: './zippy.component.html',
})
export class ZippyComponent {
  @Input('title') title: string = '';

  constructor(private store: Store<{ counter: { counter: number } }>) {}

  counterDisplay!: number;

  ngOnInit() {
    this.store.select('counter').subscribe((data) => {
      this.counterDisplay = data.counter;
    });
  }

  isExpended: boolean = false;
  toggle() {
    this.isExpended = !this.isExpended;
  }
  counterInput!:any

  add() {
    this.store.dispatch(customIncrement({ value: +this.counterInput }));
  }

  onIncrement() {
    this.store.dispatch(increament());
  }
  onDecrement() {
    this.store.dispatch(decrement());
  }
  onReset() {
    this.store.dispatch(reset());
  }
}
