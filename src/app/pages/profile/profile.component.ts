import {Component, OnDestroy, OnInit} from '@angular/core';
import {ProfileInterface} from '../../types/profile/profile-interface';
import {combineLatest, filter, map, Observable, Subject, takeUntil} from 'rxjs';
import {select, Store} from '@ngrx/store';
import {AppStateInterface} from '../../types/app-state/app-state-interface';
import {getProfileAction} from '../../store/actions/profile/profile.actions';
import {ActivatedRoute, Router} from '@angular/router';
import {
  profileErrorSelector,
  profileIsLoadingSelector,
  profileSelector,
} from '../../store/selectors/profile/profile.selectors';
import {currentUserSelector} from '../../store/selectors/auth/auth.selector';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit, OnDestroy {
  userProfile: ProfileInterface
  isLoading$: Observable<boolean>
  error$: Observable<string | null>
  destroy$: Subject<boolean> = new Subject<boolean>();
  slug: string
  apiUrl: string
  isCurrentUserProfile$: Observable<boolean>

  constructor(
    private store: Store<AppStateInterface>,
    private route: ActivatedRoute,
    private router: Router,
  ) {
  }

  ngOnInit(): void {
    this.initializeValues()
    this.initializeListeners()
  }

  ngOnDestroy(): void {
    this.destroy$.next(true)
    this.destroy$.unsubscribe()
  }

  initializeListeners(): void {
    this.store.pipe(
      takeUntil(this.destroy$),
      select(profileSelector),
    ).subscribe((profile) => {
      this.userProfile = profile
    })
    this.route.params.subscribe((params) => {
      this.slug = params['slug']
      this.fetchData()
    })
  }

  initializeValues() {
    this.slug = this.route.snapshot.paramMap.get('slug')
    this.isLoading$ = this.store.pipe(select(profileIsLoadingSelector))
    this.error$ = this.store.pipe(select(profileErrorSelector))
    this.isCurrentUserProfile$ = combineLatest(
      [this.store.pipe(select(currentUserSelector), filter(Boolean)),
        this.store.pipe(select(profileSelector), filter(Boolean)),
      ],
    ).pipe(map(([currentUser, profile]) => {
      return currentUser.username === profile.username
    }))
  }

  fetchData() {
    this.store.dispatch(getProfileAction({slug: this.slug}))
  }


  getApiUrl() {
    const isFavorites = this.router.url.includes('favorites')

    return this.apiUrl = isFavorites ?
      `/articles?favorited=${this.slug}`
      : `/articles?author=${this.slug}`
  }
}
