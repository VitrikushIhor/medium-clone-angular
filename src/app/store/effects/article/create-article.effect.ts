import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {catchError, map, of, switchMap, tap} from 'rxjs';
import {ArticleService} from '../../../services/article/article.service';
import {Router} from '@angular/router';
import {
  createArticleAction,
  createArticleActionFailure,
  createArticleActionSuccess,
} from '../../actions/article/create-article.action';
import {ArticlesInterface} from '../../../types/articles/articles-interface';

@Injectable({
  providedIn: 'root',
})
export class CreateArticleEffect {

  constructor(
    private actions$: Actions,
    private router: Router,
    private articleService: ArticleService,
  ) {
  }

  createArticle$ = createEffect(() =>
    this.actions$.pipe(ofType(createArticleAction),
      switchMap(({articleInput}) => {

        return this.articleService.createArticle(articleInput).pipe(
          map((article: ArticlesInterface) => {
            return createArticleActionSuccess({article})
          }),

          catchError((errors) => {
            return of(createArticleActionFailure({errors: errors.errors.errors}))
          }),
        )
      }),
    ))

  redirectAfterDelete$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(createArticleActionSuccess),
        tap(({article}) => {
          this.router.navigate([`/articles/${article.slug}`])
        }),
      ), {dispatch: false},
  )
}
