import {Component, OnInit} from '@angular/core';
import {AppStateInterface} from './types/app-state/app-state-interface';
import {Store} from '@ngrx/store';
import {getCurrentUserAction} from './store/actions/get-current-user-action/get-current-user.action';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(
    private store: Store<AppStateInterface>,
  ) {
  }

  ngOnInit(): void {
    this.store.dispatch(getCurrentUserAction())
  }
}
