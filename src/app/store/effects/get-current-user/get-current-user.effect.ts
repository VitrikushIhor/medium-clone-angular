import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {catchError, map, of, switchMap} from 'rxjs';
import {AuthService} from '../../../services/auth/auth.service';
import {PersistentService} from '../../../services/persistent/persistent.service';
import {
  getCurrentUserAction,
  getCurrentUserActionFailure,
  getCurrentUserActionSuccess,
} from '../../actions/get-current-user-action/get-current-user.action';

@Injectable({
  providedIn: 'root',
})
export class GetCurrentUserEffect {

  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private persistService: PersistentService,
  ) {
  }

  getCurrentUser$ = createEffect(() =>
    this.actions$.pipe(ofType(getCurrentUserAction),
      switchMap(() => {

        const token = this.persistService.get('accessToken')
        if (!token) {
          return of(getCurrentUserActionFailure())
        }

        return this.authService.getCurrentUser().pipe(
          map((currentUser) => {
            return getCurrentUserActionSuccess({currentUser})
          }),
          catchError(() => {
            return of(getCurrentUserActionFailure())
          }),
        )
      }),
    ))
}
