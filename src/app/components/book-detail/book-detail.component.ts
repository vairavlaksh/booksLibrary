import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';

import { BookDetails } from '../../app.models';
import { AppState } from '../../app.state';
import { selectBookById } from '../../modules/books/books.selectors';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css'],
})
export class BookDetailComponent implements OnInit {
  bookRoute: Subscription;
  book: BookDetails;
  bookId: string;
  authors: string;
  imageLink: string;
  imageNotFound = 'assets/images/imageNotFound.png';
  languageMap = {
    en: 'English',
    ru: 'Russian',
  };

  constructor(private store$: Store<AppState>, private route: ActivatedRoute) {}

  openSample = type => {
    const url = type === 'buy' ? this.book.buyLink : this.book.sampleLink;
    window.open(url, '_blank');
  };

  ngOnInit() {
    this.bookRoute = this.route.params.subscribe(params => {
      const ID = 'id';
      this.bookId = params[ID];
      this.store$.select(selectBookById(this.bookId)).subscribe(bookData => {
        this.book = bookData;
        this.authors =
          this.book.authors && this.book.authors.length > 0
            ? this.book.authors + ''
            : '';
        this.imageLink = this.book.imageLink
          ? this.book.imageLink
          : this.imageNotFound;
      });
    });
  }
}
