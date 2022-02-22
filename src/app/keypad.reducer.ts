import { createReducer, on } from '@ngrx/store';
import { addChar, chek } from './keypad.actions';

const correctPassword = '1337';

const initialState = {
  isCorrect: false,
  password: ''
}

export const keypadReducer = createReducer(
  initialState,
  on(addChar, (state, {char}) => {
    if (state.password.length >= 4) {
      return state;
    }

    const newPassword = state.password + char;

    const newState = {...state, password: newPassword};

    return newState;
  }),
  on(chek, state => {
    const newState = {...state};

    if(newState.password === correctPassword) {
      newState.isCorrect = true;
    }
    return newState
  })
);
