import {Component, OnInit} from '@angular/core';
import {getPopularTagsAction} from '../../../store/actions/popular-tags/popular-tags.action';
import {select, Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {
  popularTagsErrorSelector,
  popularTagsIsLoadingSelector,
  popularTagsSelector,
} from '../../../store/selectors/popular-tags/popular-tags.selector';
import {AppStateInterface} from '../../../types/app-state/app-state-interface';

@Component({
  selector: 'app-popular-tags',
  templateUrl: './popular-tags.component.html',
  styleUrls: ['./popular-tags.component.scss'],
})
export class PopularTagsComponent implements OnInit {

  popularTags$: Observable<string[] | null>
  isLoading$: Observable<boolean>
  errors$: Observable<string | null>

  constructor(
    private store: Store<AppStateInterface>,
  ) {
  }

  ngOnInit(): void {
    this.fetchData()
    this.initializeValues()
  }

  initializeValues() {
    this.popularTags$ = this.store.pipe(select(popularTagsSelector))
    this.isLoading$ = this.store.pipe(select(popularTagsIsLoadingSelector))
    this.errors$ = this.store.pipe(select(popularTagsErrorSelector))
  }

  fetchData(): void {
    this.store.dispatch(getPopularTagsAction())
  }
}
