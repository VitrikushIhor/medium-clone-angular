import {AppStateInterface} from '../../../types/app-state/app-state-interface';
import {createSelector} from '@ngrx/store';

export const popularTagsFeatureSelector = (state: AppStateInterface) => state.popularTags

export const popularTagsSelector = createSelector(
  popularTagsFeatureSelector,
  (popularTagsState) => popularTagsState.data,
)

export const popularTagsIsLoadingSelector = createSelector(
  popularTagsFeatureSelector,
  (popularTagsState) => popularTagsState.isLoading,
)

export const popularTagsErrorSelector = createSelector(
  popularTagsFeatureSelector,
  (popularTagsState) => popularTagsState.error,
)
