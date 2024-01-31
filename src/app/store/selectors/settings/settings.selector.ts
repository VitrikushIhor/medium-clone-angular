import {AppStateInterface} from '../../../types/app-state/app-state-interface';
import {createSelector} from '@ngrx/store';

export const settingsFeatureSelector = (state: AppStateInterface) => state.settings

export const settingsIsSubmittingSelector = createSelector(
  settingsFeatureSelector,
  (state) => state.isSubmitting,
)


export const settingsErrorSelector = createSelector(
  settingsFeatureSelector,
  (state) => state.validationErrors,
)
