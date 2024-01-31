import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {CurrentUserInterface} from '../../types/user/current-user-interface';
import {AppStateInterface} from '../../types/app-state/app-state-interface';
import {select, Store} from '@ngrx/store';
import {currentUserSelector, isAnonymousSelector, isLoggedInSelector} from '../../store/selectors/auth/auth.selector';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent implements OnInit {
  isLoggedIn$: Observable<boolean>
  isAnonymous: Observable<boolean>
  currentUser$: Observable<CurrentUserInterface>

  constructor(
    private store: Store<AppStateInterface>,
  ) {
  }

  ngOnInit(): void {
    this.initializeValues()
  }

  initializeValues() {
    this.currentUser$ = this.store.pipe(select(currentUserSelector))
    this.isLoggedIn$ = this.store.pipe(select(isLoggedInSelector))
    this.isAnonymous = this.store.pipe(select(isAnonymousSelector))
  }
}
