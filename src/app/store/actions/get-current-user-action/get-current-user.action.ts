import {createAction, props} from '@ngrx/store';
import {CurrentUserInterface} from '../../../types/user/current-user-interface';
import {AuthActionTypes} from '../../action-types/auth/auth-action-types';

export const getCurrentUserAction = createAction(
  AuthActionTypes.GET_CURRENT_USER,
)

export const getCurrentUserActionSuccess = createAction(
  AuthActionTypes.GET_CURRENT_USER_SUCCESS, props<{ currentUser: CurrentUserInterface }>(),
)


export const getCurrentUserActionFailure = createAction(
  AuthActionTypes.GET_CURRENT_USER_FAILURE,
)
