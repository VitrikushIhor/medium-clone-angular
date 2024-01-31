import {AppStateInterface} from '../../../types/app-state/app-state-interface';
import {createSelector} from '@ngrx/store';
import {FeedStateInterface} from '../../../types/feed/feed-state-interface';

export const feedFeatureSelector = (state: AppStateInterface): FeedStateInterface => state.feed


export const isLoadingFeedSelector = createSelector(
  feedFeatureSelector, feedState => feedState.isLoading)

export const errorFeedSelector = createSelector(
  feedFeatureSelector, feedState => feedState.error)

export const feedSelector = createSelector(
  feedFeatureSelector, feedState => feedState.data)
