import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {catchError, map, of, switchMap} from 'rxjs';
import {FeedService} from '../../../services/feed/feed.service';
import {getFeedAction, getFeedActionFailure, getFeedActionSuccess} from '../../actions/feed-action/feed-action';

@Injectable({
  providedIn: 'root',
})
export class GetFeedEffect {

  constructor(
    private actions$: Actions,
    private feedService: FeedService,
  ) {
  }

  getFeed$ = createEffect(() =>
    this.actions$.pipe(ofType(getFeedAction),
      switchMap(({url}) => {

        return this.feedService.getFeed(url).pipe(
          map((feed) => {
            return getFeedActionSuccess({feed})
          }),

          catchError(() => {
            return of(getFeedActionFailure())
          }),
        )
      }),
    ))
}
