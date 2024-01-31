import {AuthStateInterface} from '../../../types/auth/auth-state-interface';
import {createReducer, on} from '@ngrx/store';
import {
  RegisterAction,
  RegisterActionFailure,
  RegisterSuccessAction,
} from '../../actions/register-action/register.action';
import {
  loginAction,
  loginActionFailure,
  loginActionSuccess,
  logoutAction,
} from '../../actions/login-action/login.action';
import {
  getCurrentUserAction,
  getCurrentUserActionFailure,
  getCurrentUserActionSuccess,
} from '../../actions/get-current-user-action/get-current-user.action';
import {updateCurrentUserActionSuccess} from '../../actions/update-current-user/update-current-user.action';

const initialState: AuthStateInterface = {
  isSubmitting: false,
  currentUser: null,
  isLoggedIn: null,
  validationError: null,
  isLoading: false,
}

export const authReducer = createReducer(
  initialState,

//   Register

  on(RegisterAction, (state) => ({
    ...state,
    isSubmitting: true,
    validationError: null,
  })),
  on(RegisterSuccessAction, (state, {currentUser}) => ({
    ...state,
    isSubmitting: false,
    isLoggedIn: true,
    currentUser: currentUser,
  })),
  on(RegisterActionFailure, (state, {errors}) => ({
    ...state,
    isSubmitting: false,
    isLoggedIn: true,
    validationError: errors,
  })),

//   Login

  on(loginAction, (state) => ({
    ...state,
    isSubmitting: true,
    validationError: null,
  })),
  on(loginActionSuccess, (state, {currentUser}) => ({
    ...state,
    isSubmitting: false,
    currentUser: currentUser,
    isLoggedIn: true,
  })),
  on(loginActionFailure, (state, {errors}) => ({
    ...state,
    isSubmitting: false,
    isLoggedIn: true,
    validationError: errors,
  })),

//   GetCurrentUser

  on(getCurrentUserAction, (state) => ({
    ...state,
    isLoading: true,
  })),
  on(getCurrentUserActionSuccess, (state, {currentUser}) => ({
    ...state,
    isLoading: false,
    isLoggedIn: true,
    currentUser: currentUser,
  })),
  on(getCurrentUserActionFailure, (state) => ({
    ...state,
    isLoading: false,
    isLoggedIn: false,
    currentUser: null,
  })),

//   updateCurrentUser

  on(updateCurrentUserActionSuccess, (state, {currentUser}) => ({
    ...state,
    currentUser,
  })),

//   logout
  on(logoutAction, () => ({
    ...initialState,
  })),
)
