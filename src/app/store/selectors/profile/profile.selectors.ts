import {AppStateInterface} from '../../../types/app-state/app-state-interface';
import {createSelector} from '@ngrx/store';

export const profileFeatureSelector = (state: AppStateInterface) => state.profile

export const profileSelector = createSelector(
  profileFeatureSelector,
  (state) => state.data,
)

export const profileIsLoadingSelector = createSelector(
  profileFeatureSelector,
  (state) => state.isLoading,
)

export const profileErrorSelector = createSelector(
  profileFeatureSelector,
  (state) => state.error,
)
