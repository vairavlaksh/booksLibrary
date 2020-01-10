import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  isNotHomePage = false;

  constructor(private router: Router) {
    router.events
      .pipe(filter(e => e instanceof NavigationEnd))
      .subscribe(value => {
        if (value['url'] !== '/books') {
          this.isNotHomePage = true;
        } else {
          this.isNotHomePage = false;
        }
      });
  }

  ngOnInit() {}
}
