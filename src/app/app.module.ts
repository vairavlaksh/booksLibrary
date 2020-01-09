import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { environment } from '../environments/environment';
import { appReducers } from './app.reducers';
import { AppComponent } from './components/app/app.component';
import { MainComponent } from './components/main/main.component';
import { BooksEffects } from './modules/books/books.effects';
import { HeaderComponent } from './components/header/header.component';
import { BooksListComponent } from './components/books-list/books-list.component';

const appRoutes: Routes = [
  {
    path: 'main',
    component: MainComponent,
  },
  { path: '', redirectTo: '/main', pathMatch: 'full' },
  { path: '**', component: MainComponent },
];

@NgModule({
  declarations: [AppComponent, MainComponent, HeaderComponent, BooksListComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    StoreModule.forRoot(appReducers),
    RouterModule.forRoot(appRoutes),
    EffectsModule.forRoot([BooksEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
    StoreRouterConnectingModule.forRoot(),
    MatSidenavModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
