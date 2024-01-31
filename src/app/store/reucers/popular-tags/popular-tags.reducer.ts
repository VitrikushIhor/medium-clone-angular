import {PopularTagsStateInterface} from '../../../types/popular-tags/popular-tags-state-interface';
import {createReducer, on} from '@ngrx/store';
import {
  getPopularTagsAction,
  getPopularTagsActionFailure,
  getPopularTagsActionSuccess,
} from '../../actions/popular-tags/popular-tags.action';

const initialState: PopularTagsStateInterface = {
  data: null,
  error: null,
  isLoading: false,
}

export const popularTagsReducer = createReducer(
  initialState,
  on(getPopularTagsAction, (state) => ({
    ...state,
    isLoading: true,
  })),
  on(getPopularTagsActionSuccess, (state, {popularTags}) => ({
    ...state,
    isLoading: false,
    data: popularTags,
  })),
  on(getPopularTagsActionFailure, (state) => ({
    ...state,
    isLoading: false,
  })),
)
