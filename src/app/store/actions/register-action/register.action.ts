import {createAction, props} from '@ngrx/store';
import {RegisterRequestInterface} from '../../../types/user/register-request-interface';
import {CurrentUserInterface} from '../../../types/user/current-user-interface';
import {BackendErrorsInterface} from '../../../types/beckend-erorrs/backend-errors.interface';
import {AuthActionTypes} from '../../action-types/auth/auth-action-types';

export const RegisterAction = createAction(
  AuthActionTypes.REGISTER,
  props<{ request: RegisterRequestInterface }>())
export const RegisterSuccessAction = createAction(
  AuthActionTypes.REGISTER_SUCCESS, props<{
    currentUser: CurrentUserInterface
  }>())
export const RegisterActionFailure = createAction(
  AuthActionTypes.REGISTER_FAILURE, props<{ errors: BackendErrorsInterface }>())
