import {createAction, props} from '@ngrx/store';
import {PopularTagsActionTypes} from '../../action-types/popular-tags/popular-tags-action-types';

export const getPopularTagsAction = createAction(PopularTagsActionTypes.POPULAR_TAGS)
export const getPopularTagsActionSuccess = createAction(
  PopularTagsActionTypes.POPULAR_TAGS_SUCCESS, props<{
    popularTags: string[]
  }>())
export const getPopularTagsActionFailure = createAction(PopularTagsActionTypes.POPULAR_TAGS_FAILURE)
