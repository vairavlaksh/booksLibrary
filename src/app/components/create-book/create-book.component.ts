import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material';
import { Store } from '@ngrx/store';
import { AddBooks } from 'src/app/modules/books/books.actions';

import { AppState } from '../../app.state';
import { NewBookData } from '../../modules/create-book/create-book.model';

@Component({
  selector: 'app-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.css'],
})
export class CreateBookComponent implements OnInit {
  title = new FormControl('', [Validators.required]);
  authors = new FormControl('');
  publisher = new FormControl('');
  publishedDate = new FormControl(new Date().toLocaleDateString());
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: NewBookData,
    private store$: Store<AppState>,
  ) {}

  getErrorMessage = () => {
    return this.title.hasError('required') ? 'Please enter the title' : '';
  };

  onSubmit() {
    if (this.title.value !== '') {
      const newBookData = {
        title: this.title.value,
        authors: this.authors.value,
        publisher: this.publisher.value,
        publishedDate: this.publishedDate.value,
      };
      this.store$.dispatch(new AddBooks(newBookData));
    }
  }

  ngOnInit() {}
}
