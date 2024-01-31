import {createAction, props} from '@ngrx/store';
import {ArticleActionTypes} from '../../action-types/article/article-action-types';
import {ArticlesInterface} from '../../../types/articles/articles-interface';

export const getArticleAction = createAction(
  ArticleActionTypes.GET_ARTICLE, props<{ slug: string }>())

export const getArticleActionSuccess = createAction(
  ArticleActionTypes.GET_ARTICLE_SUCCESS, props<{ article: ArticlesInterface }>())

export const getArticleActionFailure = createAction(
  ArticleActionTypes.GET_ARTICLE_FAILURE)
