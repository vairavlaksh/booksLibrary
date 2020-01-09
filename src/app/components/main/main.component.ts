import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/app.state';
import { Book } from 'src/app/modules/book/book.models';
import { GetBooks } from 'src/app/modules/books/books.actions';
import { selectBooksList } from 'src/app/modules/books/books.selectors';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
  books: Observable<Book[]>;

  constructor(private store$: Store<AppState>) {
    this.store$.select(selectBooksList).subscribe(data => {});
  }

  ngOnInit() {
    this.store$.dispatch(new GetBooks());
  }
}
