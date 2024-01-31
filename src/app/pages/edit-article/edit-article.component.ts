import {Component, OnInit} from '@angular/core';
import {ArticleInputInterface} from '../../types/articles/article-input-interface';
import {filter, map, Observable} from 'rxjs';
import {BackendErrorsInterface} from '../../types/beckend-erorrs/backend-errors.interface';
import {select, Store} from '@ngrx/store';
import {AppStateInterface} from '../../types/app-state/app-state-interface';
import {ActivatedRoute} from '@angular/router';
import {fetchArticleAction} from '../../store/actions/article/fetch-article.action';
import {
  updateArticleErrorSelector,
  updateArticleIsLoadingSelector,
  updateArticleIsSubmittingSelector,
  updateArticleSelector,
} from '../../store/selectors/article/update-article.selector';
import {updateArticleAction} from '../../store/actions/article/update-article-action';

@Component({
  selector: 'app-edit-article',
  templateUrl: './edit-article.component.html',
  styleUrls: ['./edit-article.component.scss'],
})
export class EditArticleComponent implements OnInit {
  initialValues$: Observable<ArticleInputInterface>
  slug: string
  isSubmitting$: Observable<boolean>
  errors$: Observable<BackendErrorsInterface | null>
  isLoading$: Observable<boolean>

  constructor(
    private store: Store<AppStateInterface>,
    private route: ActivatedRoute,
  ) {
  }

  ngOnInit(): void {
    this.initializeValues()
    this.fetchData()
  }

  initializeValues(): void {
    this.slug = this.route.snapshot.paramMap.get('slug')
    this.isSubmitting$ = this.store.pipe(select(updateArticleIsSubmittingSelector))
    this.errors$ = this.store.pipe(select(updateArticleErrorSelector))
    this.initialValues$ = this.store.pipe(select(updateArticleSelector), filter((Boolean)), map((article) => {
      return {
        title: article.title,
        description: article.description,
        body: article.body,
        tagList: article.tagList,
      }
    }))
    this.isLoading$ = this.store.pipe(select(updateArticleIsLoadingSelector))
  }

  fetchData() {
    this.store.dispatch(fetchArticleAction({slug: this.slug}))
  }

  onSubmit(articleInput: ArticleInputInterface) {
    this.store.dispatch(updateArticleAction({articleInput: articleInput, slug: this.slug}))
  }
}
