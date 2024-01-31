import {Component, Input, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {select, Store} from '@ngrx/store';
import {AppStateInterface} from '../../../types/app-state/app-state-interface';
import {isLoggedInSelector} from '../../../store/selectors/auth/auth.selector';

@Component({
  selector: 'app-toggle-feed',
  templateUrl: './toggle-feed.component.html',
  styleUrls: ['./toggle-feed.component.scss'],
})
export class ToggleFeedComponent implements OnInit {
  @Input() tagName: string
  isLoggedIn$: Observable<boolean>

  constructor(
    private store: Store<AppStateInterface>,
  ) {
  }

  ngOnInit(): void {
    this.initializeValues()
  }

  initializeValues() {
    this.isLoggedIn$ = this.store.pipe(select(isLoggedInSelector))
  }
}
