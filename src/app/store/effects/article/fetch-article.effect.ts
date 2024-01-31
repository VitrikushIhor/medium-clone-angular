import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {catchError, map, of, switchMap} from 'rxjs';
import {ArticleService} from '../../../services/article/article.service';
import {ArticlesInterface} from '../../../types/articles/articles-interface';
import {
  fetchArticleAction,
  fetchArticleActionFailure,
  fetchArticleActionSuccess,
} from '../../actions/article/fetch-article.action';

@Injectable({
  providedIn: 'root',
})
export class FetchArticleEffect {

  constructor(
    private actions$: Actions,
    private articleService: ArticleService,
  ) {
  }

  fetchArticle$ = createEffect(() =>
    this.actions$.pipe(ofType(fetchArticleAction),
      switchMap(({slug}) => {

        return this.articleService.getArticle(slug).pipe(
          map((article: ArticlesInterface) => {
            return fetchArticleActionSuccess({article})
          }),

          catchError(() => {
            return of(fetchArticleActionFailure())
          }),
        )
      }),
    ))

}
