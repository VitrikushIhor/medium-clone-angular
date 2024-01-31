import {Component, OnInit} from '@angular/core';
import {ArticleInputInterface} from '../../types/articles/article-input-interface';
import {Observable} from 'rxjs';
import {BackendErrorsInterface} from '../../types/beckend-erorrs/backend-errors.interface';
import {AppStateInterface} from '../../types/app-state/app-state-interface';
import {select, Store} from '@ngrx/store';
import {
  createArticleErrorSelector,
  createArticleIsSubmittingSelector,
} from '../../store/selectors/article/create-article.selector';
import {createArticleAction} from '../../store/actions/article/create-article.action';

@Component({
  selector: 'app-create-article',
  templateUrl: './create-article.component.html',
  styleUrls: ['./create-article.component.scss'],
})
export class CreateArticleComponent implements OnInit {
  initialValues: ArticleInputInterface = {
    title: '',
    description: '',
    body: '',
    tagList: [],
  }
  isSubmitting$: Observable<boolean>
  errors$: Observable<BackendErrorsInterface | null>

  constructor(
    private store: Store<AppStateInterface>,
  ) {
  }

  ngOnInit(): void {
    this.initializeValues()
  }

  initializeValues(): void {
    this.isSubmitting$ = this.store.pipe(select(createArticleIsSubmittingSelector))
    this.errors$ = this.store.pipe(select(createArticleErrorSelector))
  }

  onSubmit(articleInput: ArticleInputInterface) {
    this.store.dispatch(createArticleAction({articleInput}))
  }

}
