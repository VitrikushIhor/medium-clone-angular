import {createAction, props} from '@ngrx/store';
import {LoginRequestInterface} from '../../../types/login/login-request-interface';
import {CurrentUserInterface} from '../../../types/user/current-user-interface';
import {BackendErrorsInterface} from '../../../types/beckend-erorrs/backend-errors.interface';
import {AuthActionTypes} from '../../action-types/auth/auth-action-types';

export const loginAction = createAction(
  AuthActionTypes.LOGIN, props<{ request: LoginRequestInterface }>(),
)

export const loginActionSuccess = createAction(
  AuthActionTypes.LOGIN_SUCCESS, props<{ currentUser: CurrentUserInterface }>(),
)


export const loginActionFailure = createAction(
  AuthActionTypes.LOGIN_FAILURE, props<{ errors: BackendErrorsInterface }>(),
)

export const logoutAction = createAction(
  AuthActionTypes.LOGOUT,
)
