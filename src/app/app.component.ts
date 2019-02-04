import { Component, OnInit } from '@angular/core';
import {
  Observable,
  from,
  interval,
  forkJoin,
  merge,
  combineLatest,
  timer,
  Subject
} from 'rxjs';
import {
  filter,
  reduce,
  take,
  skip,
  map,
  switchMap,
  tap,
  shareReplay
} from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private http: HttpClient) {
  }

  /**
   * here is your playground
   */
  ngOnInit() {

  }

  /********** wait for subjects ********* */
  fetchJoke() {
    return this.http.get('https://api.chucknorris.io/jokes/random');
  }
}
