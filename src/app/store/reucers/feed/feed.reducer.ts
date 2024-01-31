import {FeedStateInterface} from '../../../types/feed/feed-state-interface';
import {createReducer, on} from '@ngrx/store';
import {getFeedAction, getFeedActionFailure, getFeedActionSuccess} from '../../actions/feed-action/feed-action';
import {routerNavigatedAction} from '@ngrx/router-store';

const initialState: FeedStateInterface = {
  data: null,
  isLoading: false,
  error: null,
}


export const feedReducer = createReducer(
  initialState,
  // feed
  on(getFeedAction, (state) => ({
    ...state,
    isLoading: true,
  })),
  on(getFeedActionSuccess, (state, {feed}) => ({
    ...state,
    isLoading: false,
    data: feed,
  })),
  on(getFeedActionFailure, (state) => ({
    ...state,
    isLoading: false,
  })),

//   router
  on(routerNavigatedAction, (state) => initialState),
)
