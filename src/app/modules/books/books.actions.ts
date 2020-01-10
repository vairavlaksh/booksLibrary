import { Action } from '@ngrx/store';

import { NewBookData } from '../create-book/create-book.model';

export const GET_BOOKS = '[books] Get Books';
export const GET_BOOKS_SUCCESS = '[books] Get Books Success';
export const GET_BOOKS_FAILURE = '[books] Get Books Failed';
export const ADD_BOOKS = '[books] Add Books';

export class GetBooks implements Action {
  public readonly type = GET_BOOKS;
}

export class GetBooksSuccess implements Action {
  public readonly type = GET_BOOKS_SUCCESS;
  constructor(public books: any) {}
}

export class GetBooksFailure implements Action {
  public readonly type = GET_BOOKS_FAILURE;
  constructor(public error: any) {}
}

export class AddBooks implements Action {
  public readonly type = ADD_BOOKS;
  constructor(public book: NewBookData) {}
}

export type BooksActions =
  | GetBooks
  | GetBooksSuccess
  | GetBooksFailure
  | AddBooks;
