import { createAction, props } from '@ngrx/store';

export const addChar = createAction(
  '[Keypad] Add character',
  props<{char: string}>());

export const chek = createAction('[Keypad] Chek character');

export const deleteChar = createAction('[Keypad] Delete character');
