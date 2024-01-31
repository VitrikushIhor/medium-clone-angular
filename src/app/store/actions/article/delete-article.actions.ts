import {createAction, props} from '@ngrx/store';
import {ArticleActionTypes} from '../../action-types/article/article-action-types';

export const deleteArticleAction = createAction(
  ArticleActionTypes.DELETE_ARTICLE, props<{ slug: string }>())

export const deleteArticleActionSuccess = createAction(
  ArticleActionTypes.DELETE_ARTICLE_SUCCESS)

export const deleteArticleActionFailure = createAction(
  ArticleActionTypes.DELETE_ARTICLE_FAILURE)
