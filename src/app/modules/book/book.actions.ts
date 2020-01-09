import { Action } from '@ngrx/store';

import { Book } from './book.models';

export enum bookActions {
  UpdateSelectedBook = '[book] Get Selected Book',
}

export class UpdateSelectedBook implements Action {
  public readonly type = bookActions.UpdateSelectedBook;
  constructor(public book: Book) {}
}

export type BookActions = UpdateSelectedBook;
