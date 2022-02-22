import { createAction, props } from '@ngrx/store';

export const addChar = createAction(
  '[Keypad] Add character',
  props<{char: string}>());
