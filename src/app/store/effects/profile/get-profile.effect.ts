import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {catchError, map, of, switchMap} from 'rxjs';
import {ProfileService} from '../../../services/profile/profile.service';
import {
  getProfileAction,
  getProfileActionFailure,
  getProfileActionSuccess,
} from '../../actions/profile/profile.actions';

@Injectable({
  providedIn: 'root',
})
export class GetProfileEffect {

  constructor(
    private actions$: Actions,
    private profileService: ProfileService,
  ) {
  }

  getProfile$ = createEffect(() =>
    this.actions$.pipe(ofType(getProfileAction),
      switchMap(({slug}) => {

        return this.profileService.getUserProfile(slug).pipe(
          map((userProfile) => {
            return getProfileActionSuccess({userProfile})
          }),

          catchError(() => {
            return of(getProfileActionFailure())
          }),
        )
      }),
    ))
}
