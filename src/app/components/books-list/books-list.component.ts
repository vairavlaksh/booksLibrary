import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';

import { Book, BookBasicDetails } from '../../app.models';
import { AppState } from '../../app.state';
import { GetBooks } from '../../modules/books/books.actions';
import { selectBooksList } from '../../modules/books/books.selectors';
import { initialNewBookData } from '../../modules/create-book/create-book.model';
import { CreateBookComponent } from '../create-book/create-book.component';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.css'],
})
export class BooksListComponent implements OnInit {
  books: Book;
  booksForm = new FormControl();
  booksTitle: string[] = [];
  booksData: BookBasicDetails[] = [];

  constructor(
    private store$: Store<AppState>,
    private router: Router,
    public dialog: MatDialog,
  ) {
    this.store$.select(selectBooksList).subscribe(booksData => {
      this.books = booksData;
      if (this.books) {
        this.booksTitle = [];
        this.booksData = [];
        Object.keys(this.books).forEach(key => {
          this.booksTitle.push(this.books[key].title);
          this.booksData.push({
            id: key,
            title: this.books[key].title,
            authors:
              this.books[key].authors && this.books[key].authors.length > 0
                ? this.books[key].authors + ''
                : '',
            publisher: this.books[key].publisher,
            publishedDate: this.books[key].publishedDate,
          });
        });
      }
    });
  }

  updateSelectedBook = id => {
    this.router.navigate(['/book', id]);
  };

  openCreateForm = () => {
    this.dialog.open(CreateBookComponent, {
      data: initialNewBookData,
    });
  };

  ngOnInit() {
    this.store$.dispatch(new GetBooks());
  }
}
