import { increament, decrement, reset, customIncrement } from './counter.actions';
import { createReducer, on } from '@ngrx/store';
import { initialState } from './counter.state';

const _counterReducer = createReducer(
  initialState,
  on(increament, (state) => {
    return {
      ...state,
      counter: state.counter + 1,
    };
  }),
  on(decrement, (state) => {
    return {
      ...state,
      counter: state.counter - 1,
    };
  }),
  on(reset, (state) => {
    return {
      ...state,
      counter: 0,
    };
  }),
  on(customIncrement, (state,action) => {
    return {
      ...state,
      counter: state.counter+action.value,
    };
  })
);
export function counterReducer(state: any, action: any) {
  return _counterReducer(state,action);
}
