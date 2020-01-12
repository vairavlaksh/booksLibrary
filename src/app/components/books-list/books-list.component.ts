import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

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
  searchControl = new FormControl();
  booksData: BookBasicDetails[] = [];
  filteredValues: Observable<BookBasicDetails[]>;

  constructor(
    private store$: Store<AppState>,
    private router: Router,
    public dialog: MatDialog,
  ) {
    this.store$.select(selectBooksList).subscribe(booksData => {
      this.books = booksData;
      if (this.books) {
        this.booksData = [];
        Object.keys(this.books).forEach(key => {
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
        this.filteredValues = this.searchControl.valueChanges.pipe(
          startWith(''),
          map(value => (typeof value === 'string' ? value : value.name)),
          map(title =>
            title ? this.filterSearch(title) : this.booksData.slice(),
          ),
        );
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

  filterSearch = (title: string) => {
    const filterValue = title.toLowerCase();

    return this.booksData.filter(
      data => data.title.toLowerCase().indexOf(filterValue) === 0,
    );
  };

  ngOnInit() {
    this.store$.dispatch(new GetBooks());
  }
}
