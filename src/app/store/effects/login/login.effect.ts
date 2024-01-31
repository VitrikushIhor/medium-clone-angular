import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {catchError, map, of, switchMap, tap} from 'rxjs';
import {AuthService} from '../../../services/auth/auth.service';
import {PersistentService} from '../../../services/persistent/persistent.service';
import {Router} from '@angular/router';
import {
  loginAction,
  loginActionFailure,
  loginActionSuccess,
  logoutAction,
} from '../../actions/login-action/login.action';

@Injectable({
  providedIn: 'root',
})
export class LoginEffect {

  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private persistService: PersistentService,
    private router: Router,
  ) {
  }

  login$ = createEffect(() =>
    this.actions$.pipe(ofType(loginAction),
      switchMap(({request}) => {
        return this.authService.login(request).pipe(
          map((currentUser) => {
            this.persistService.set('accessToken', currentUser.token)
            return loginActionSuccess({currentUser})
          }),
          catchError((errorResponse) => {
            return of(loginActionFailure({errors: errorResponse.error.errors}))
          }),
        )
      }),
    ))

  logout$ = createEffect(() =>
    this.actions$.pipe(ofType(logoutAction),
      tap(() => {
        this.persistService.set('accessToken', '')
        this.router.navigateByUrl('/')
      }),
    ), {dispatch: false})

  redirectAfterSubmit$ = createEffect(() => this.actions$.pipe(
    ofType(loginActionSuccess),
    tap(() => {
      this.router.navigateByUrl('/')
    }),
  ), {dispatch: false})

}
