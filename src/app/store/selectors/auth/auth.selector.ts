import {AppStateInterface} from '../../../types/app-state/app-state-interface';
import {AuthStateInterface} from '../../../types/auth/auth-state-interface';
import {createSelector} from '@ngrx/store';

export const authFeatureSelector = (state: AppStateInterface): AuthStateInterface => state.auth


export const isSubmittingSelector = createSelector(
  authFeatureSelector, authState => authState.isSubmitting)

export const validationErrorSelector = createSelector(
  authFeatureSelector, authState => authState.validationError)

export const isLoggedInSelector = createSelector(
  authFeatureSelector, authState => authState.isLoggedIn)

export const isAnonymousSelector = createSelector(
  authFeatureSelector, authState => authState.isLoggedIn === false)


export const currentUserSelector = createSelector(
  authFeatureSelector, authState => authState.currentUser)
