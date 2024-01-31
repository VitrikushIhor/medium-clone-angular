import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {
  RegisterAction,
  RegisterActionFailure,
  RegisterSuccessAction,
} from '../../actions/register-action/register.action';
import {catchError, map, of, switchMap, tap} from 'rxjs';
import {AuthService} from '../../../services/auth/auth.service';
import {PersistentService} from '../../../services/persistent/persistent.service';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class RegisterEffect {

  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private persistService: PersistentService,
    private router: Router,
  ) {
  }

  register$ = createEffect(() =>
    this.actions$.pipe(ofType(RegisterAction),
      switchMap(({request}) => {
        return this.authService.register(request).pipe(
          map((currentUser) => {
            this.persistService.set('accessToken', currentUser.token)
            return RegisterSuccessAction({currentUser})
          }),
          catchError((errorResponse) => {
            return of(RegisterActionFailure({errors: errorResponse.error.errors}))
          }),
        )
      }),
    ))

  redirectAfterSubmit$ = createEffect(() => this.actions$.pipe(
    ofType(RegisterSuccessAction),
    tap(() => {
      this.router.navigateByUrl('/')
    }),
  ), {dispatch: false})

}
