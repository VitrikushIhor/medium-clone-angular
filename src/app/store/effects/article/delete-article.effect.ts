import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {catchError, map, of, switchMap, tap} from 'rxjs';
import {ArticleService} from '../../../services/article/article.service';
import {
  deleteArticleAction,
  deleteArticleActionFailure,
  deleteArticleActionSuccess,
} from '../../actions/article/delete-article.actions';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class DeleteArticleEffect {

  constructor(
    private actions$: Actions,
    private router: Router,
    private articleService: ArticleService,
  ) {
  }

  deleteArticle$ = createEffect(() =>
    this.actions$.pipe(ofType(deleteArticleAction),
      switchMap(({slug}) => {

        return this.articleService.deleteArticle(slug).pipe(
          map(() => {
            return deleteArticleActionSuccess()
          }),

          catchError(() => {
            return of(deleteArticleActionFailure())
          }),
        )
      }),
    ))

  redirectAfterDelete$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(deleteArticleActionSuccess),
        tap(() => {
          this.router.navigateByUrl('/')
        }),
      ), {dispatch: false},
  )
}
