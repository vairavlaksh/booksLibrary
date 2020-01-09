import { Action } from '@ngrx/store';

export const GET_BOOKS = '[books] Get Books';
export const GET_BOOKS_SUCCESS = '[books] Get Books Success';
export const GET_BOOKS_FAILURE = '[books] Get Books Failed';

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

export type BooksActions = GetBooks | GetBooksSuccess | GetBooksFailure;
