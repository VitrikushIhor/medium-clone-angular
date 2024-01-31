import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {catchError, map, of, switchMap} from 'rxjs';
import {
  updateCurrentUserAction,
  updateCurrentUserActionFailure,
  updateCurrentUserActionSuccess,
} from '../../actions/update-current-user/update-current-user.action';
import {AuthService} from '../../../services/auth/auth.service';

@Injectable({
  providedIn: 'root',
})
export class UpdateCurrentUserEffect {

  constructor(
    private actions$: Actions,
    private authService: AuthService,
  ) {
  }

  updateCurrentUser$ = createEffect(() =>
    this.actions$.pipe(ofType(updateCurrentUserAction),
      switchMap(({currentUser}) => {

        return this.authService.updateCurrentUser(currentUser).pipe(
          map((popularTags) => {
            return updateCurrentUserActionSuccess({currentUser});
          }),

          catchError((err) => {
            return of(updateCurrentUserActionFailure(err.error.errors))
          }),
        )
      }),
    ))
}
