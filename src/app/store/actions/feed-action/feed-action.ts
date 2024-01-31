import {createAction, props} from '@ngrx/store';
import {FeedActionTypes} from '../../action-types/feed/feed-action-types';
import {GetFeedResponseInterface} from '../../../types/feed/get-feed-response-interface';

export const getFeedAction = createAction(
  FeedActionTypes.GET_FEED, props<{ url: string }>())

export const getFeedActionSuccess = createAction(
  FeedActionTypes.GET_FEED_SUCCESS, props<{ feed: GetFeedResponseInterface }>())

export const getFeedActionFailure = createAction(
  FeedActionTypes.GET_FEED_FAILURE)
