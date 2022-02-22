import { createReducer, on } from '@ngrx/store';
import { addChar, chek, deleteChar } from './keypad.actions';

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

    return {...state, password: newPassword};
  }),
  on(chek, state => {
    const newState = {...state};

    if(newState.password === correctPassword) {
      newState.isCorrect = true;
    }

    return newState
  }),
  on(deleteChar, state => {

    const copyState = {...state};

    const newPassword = copyState.password.substring(copyState.password.length - 1);

    return  {...state, password: newPassword};
  })
);
