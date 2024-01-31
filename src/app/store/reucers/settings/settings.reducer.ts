import {SettingsStateInterface} from '../../../types/settings/settings-state-interface';
import {createReducer, on} from '@ngrx/store';
import {
  updateCurrentUserAction,
  updateCurrentUserActionFailure,
  updateCurrentUserActionSuccess,
} from '../../actions/update-current-user/update-current-user.action';

const initialState: SettingsStateInterface = {
  isSubmitting: false,
  validationErrors: null,
}


export const settingsReducer = createReducer(
  initialState,
  on(updateCurrentUserAction, (state) => ({
    ...state,
    isSubmitting: true,
  })),
  on(updateCurrentUserActionSuccess, (state) => ({
    ...state,
    isSubmitting: false,
  })),
  on(updateCurrentUserActionFailure, (state, {errors}) => ({
    ...state,
    isSubmitting: false,
    validationErrors: errors,
  })),
)
