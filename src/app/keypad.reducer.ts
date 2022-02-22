import { createReducer, on } from '@ngrx/store';
import { addChar } from './keypad.actions';

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

    if(newPassword === correctPassword) {
      newState.isCorrect = true;
    }

    return newState;
  })
);
