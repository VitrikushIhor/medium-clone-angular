import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {catchError, map, of, switchMap} from 'rxjs';
import {getCurrentUserActionFailure} from '../../actions/get-current-user-action/get-current-user.action';
import {getPopularTagsAction, getPopularTagsActionSuccess} from '../../actions/popular-tags/popular-tags.action';
import {PopularTagsService} from '../../../services/popular-tags/popular-tags.service';

@Injectable({
  providedIn: 'root',
})
export class GetPopularTagsEffect {

  constructor(
    private actions$: Actions,
    private popularTagsService: PopularTagsService,
  ) {
  }

  getPopularTags$ = createEffect(() =>
    this.actions$.pipe(ofType(getPopularTagsAction),
      switchMap(() => {

        return this.popularTagsService.getPopularTags().pipe(
          map((popularTags) => {
            return getPopularTagsActionSuccess({popularTags});
          }),

          catchError(() => {
            return of(getCurrentUserActionFailure())
          }),
        )
      }),
    ))
}
