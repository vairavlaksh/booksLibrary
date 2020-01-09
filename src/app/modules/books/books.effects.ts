import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';

import { GET_BOOKS, GetBooksFailure, GetBooksSuccess } from './books.actions';

@Injectable()
export class BooksEffects {
  constructor(private actions$: Actions, private http: HttpClient) {}

  getBooksUrl =
    'https://www.googleapis.com/books/v1/volumes?q=kaplan%20test%20prep';

  @Effect()
  getBooks = this.actions$.pipe(
    ofType(GET_BOOKS),
    switchMap(() => {
      console.log('catching here');
      return this.http.get(this.getBooksUrl).pipe(
        map(books => new GetBooksSuccess(books)),
        catchError(error => of(new GetBooksFailure(error))),
      );
    }),
  );
}
