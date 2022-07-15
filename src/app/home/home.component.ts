import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as fromModel from "../store/models/home.model";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  count$: Observable<fromModel.appState>;

  constructor(private store: Store<{app: fromModel.appState}>) {
    this.count$ = store.select('app');
  }

  ngOnInit(): void {

    /**
     * ? hmmm...
     * TODO: well a to do
     * * general
     * ! important!
     * @param test heyyyyyy
     */

  }

}
