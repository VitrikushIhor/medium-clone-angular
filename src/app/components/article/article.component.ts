import {Component, OnDestroy, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {AppStateInterface} from '../../types/app-state/app-state-interface';
import {ActivatedRoute} from '@angular/router';
import {combineLatest, map, Observable, Subject, takeUntil} from 'rxjs';
import {ArticlesInterface} from '../../types/articles/articles-interface';
import {
  articleSelector,
  errorArticleSelector,
  isLoadingArticleSelector,
} from '../../store/selectors/article/article.selector';
import {currentUserSelector} from '../../store/selectors/auth/auth.selector';
import {CurrentUserInterface} from '../../types/user/current-user-interface';
import {getArticleAction} from '../../store/actions/article/get-article.action';
import {deleteArticleAction} from '../../store/actions/article/delete-article.actions';


@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
})
export class ArticleComponent implements OnInit, OnDestroy {

  slug: string
  destroy$: Subject<boolean> = new Subject<boolean>();
  article: ArticlesInterface | null
  isLoading$: Observable<boolean>
  error$: Observable<string | null>
  isAuthor$: Observable<boolean>


  constructor(
    private store: Store<AppStateInterface>,
    private route: ActivatedRoute,
  ) {
  }

  ngOnInit(): void {
    this.initializeValues()
    this.initializeListeners()
    this.fetchData()

  }

  ngOnDestroy(): void {
    this.destroy$.next(true)
    this.destroy$.unsubscribe()
  }

  fetchData(): void {
    this.store.dispatch(getArticleAction({slug: this.slug}))
  }

  initializeValues(): void {
    this.isLoading$ = this.store.pipe(select(isLoadingArticleSelector))
    this.error$ = this.store.pipe(select(errorArticleSelector))
    this.slug = this.route.snapshot.paramMap.get('slug')

    this.isAuthor$ = combineLatest(
      [this.store.pipe(select(articleSelector)),
        this.store.pipe(select(currentUserSelector))],
    ).pipe(
      map(
        ([article, currentUser]: [
            ArticlesInterface | null,
            CurrentUserInterface | null
        ]) => {
          if (!article || !currentUser) {
            return false
          }
          return currentUser.username === article.author.username
        },
      ),
    )
  }

  initializeListeners(): void {
    this.store.pipe(
      takeUntil(this.destroy$),
      select(articleSelector),
    ).subscribe((data => {
      this.article = data
    }))
  }

  removeArticle() {
    this.store.dispatch(deleteArticleAction({slug: this.slug}))
  }
}
