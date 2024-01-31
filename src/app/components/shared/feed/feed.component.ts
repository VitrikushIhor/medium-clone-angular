import {Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {AppStateInterface} from '../../../types/app-state/app-state-interface';
import {getFeedAction} from '../../../store/actions/feed-action/feed-action';
import {Observable, Subject, takeUntil} from 'rxjs';
import {GetFeedResponseInterface} from '../../../types/feed/get-feed-response-interface';
import {errorFeedSelector, feedSelector, isLoadingFeedSelector} from '../../../store/selectors/feed/feed.selector';
import {ActivatedRoute, Router} from '@angular/router';
import queryString from 'query-string';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss'],
})
export class FeedComponent implements OnInit, OnDestroy, OnChanges {
  @Input() apiUrl: string
  isLoading$: Observable<boolean>
  error$: Observable<string | null>
  feed$: Observable<GetFeedResponseInterface | null>
  limit = 5
  baseUrl: string
  destroy$: Subject<boolean> = new Subject<boolean>()
  currentPage: number

  constructor(
    private store: Store<AppStateInterface>,
    private router: Router,
    private route: ActivatedRoute,
  ) {
  }

  ngOnDestroy(): void {
    this.destroy$.next(true)
    this.destroy$.unsubscribe()
  }

  ngOnInit(): void {
    this.initializeValues()
    this.initializeListeners()
  }

  ngOnChanges(changes: SimpleChanges): void {
    const isApiUrlChanged = !changes['apiUrl'].firstChange && changes['apiUrl'].currentValue !== changes['apiUrl'].previousValue
    if (isApiUrlChanged) {
      this.fetchFeed()
    }
  }

  initializeValues() {
    this.baseUrl = this.router.url.split('?')[0]
    this.isLoading$ = this.store.pipe(select(isLoadingFeedSelector))
    this.error$ = this.store.pipe(select(errorFeedSelector))
    this.feed$ = this.store.pipe(select(feedSelector))
  }

  fetchFeed() {
    const offset = this.currentPage * this.limit - this.limit
    const parsedUrl = queryString.parseUrl(this.apiUrl)
    const stringifledParams = queryString.stringify({
      limit: this.limit,
      offset,
      ...parsedUrl.query,
    })
    const apiUrlWithParams = `${parsedUrl.url}?${stringifledParams}`
    this.store.dispatch(getFeedAction({url: apiUrlWithParams}))
  }

  initializeListeners() {
    this.route.queryParams
      .pipe(takeUntil(this.destroy$))
      .subscribe((params) => {
        this.currentPage = Number(params['page'] || '1')
        this.fetchFeed()
      })
  }
}
