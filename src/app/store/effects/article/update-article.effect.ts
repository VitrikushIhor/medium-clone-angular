import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {catchError, map, of, switchMap, tap} from 'rxjs';
import {ArticleService} from '../../../services/article/article.service';
import {Router} from '@angular/router';
import {ArticlesInterface} from '../../../types/articles/articles-interface';
import {
  updateArticleAction,
  updateArticleActionFailure,
  updateArticleActionSuccess,
} from '../../actions/article/update-article-action';

@Injectable({
  providedIn: 'root',
})
export class UpdateArticleEffect {

  constructor(
    private actions$: Actions,
    private router: Router,
    private articleService: ArticleService,
  ) {
  }

  updateArticle$ = createEffect(() =>
    this.actions$.pipe(ofType(updateArticleAction),
      switchMap(({slug, articleInput}) => {

        return this.articleService.updateArticle(slug, articleInput).pipe(
          map((article: ArticlesInterface) => {
            return updateArticleActionSuccess({article})
          }),

          catchError((errors) => {
            return of(updateArticleActionFailure({errors: errors.errors.errors}))
          }),
        )
      }),
    ))

  redirectAfterUpdate$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(updateArticleActionSuccess),
        tap(({article}) => {
          this.router.navigate([`/articles/${article.slug}`])
        }),
      ), {dispatch: false},
  )
}
