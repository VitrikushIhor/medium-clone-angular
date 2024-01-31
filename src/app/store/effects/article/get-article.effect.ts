import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {catchError, map, of, switchMap} from 'rxjs';
import {ArticleService} from '../../../services/article/article.service';
import {
  getArticleAction,
  getArticleActionFailure,
  getArticleActionSuccess,
} from '../../actions/article/get-article.action';

@Injectable({
  providedIn: 'root',
})
export class GetArticleEffect {

  constructor(
    private actions$: Actions,
    private articleService: ArticleService,
  ) {
  }

  getArticle$ = createEffect(() =>
    this.actions$.pipe(ofType(getArticleAction),
      switchMap(({slug}) => {

        return this.articleService.getArticle(slug).pipe(
          map((article) => {
            return getArticleActionSuccess({article})
          }),

          catchError(() => {
            return of(getArticleActionFailure())
          }),
        )
      }),
    ))
}
