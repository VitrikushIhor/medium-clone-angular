import {createAction, props} from '@ngrx/store';
import {CurrentUserInterface} from '../../../types/user/current-user-interface';
import {AuthActionTypes} from '../../action-types/auth/auth-action-types';
import {CurrentUserInputInterface} from '../../../types/auth/current-user-input-interface';
import {BackendErrorsInterface} from '../../../types/beckend-erorrs/backend-errors.interface';

export const updateCurrentUserAction = createAction(
  AuthActionTypes.UPDATE_CURRENT_USER, props<{ currentUser: CurrentUserInputInterface }>(),
)

export const updateCurrentUserActionSuccess = createAction(
  AuthActionTypes.UPDATE_CURRENT_USER_SUCCESS, props<{ currentUser: CurrentUserInterface }>(),
)


export const updateCurrentUserActionFailure = createAction(
  AuthActionTypes.UPDATE_CURRENT_USER_FAILURE, props<{ errors: BackendErrorsInterface }>(),
)
