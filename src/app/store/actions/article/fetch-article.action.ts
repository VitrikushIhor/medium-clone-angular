import {createAction, props} from '@ngrx/store';
import {ArticleActionTypes} from '../../action-types/article/article-action-types';
import {ArticlesInterface} from '../../../types/articles/articles-interface';

export const fetchArticleAction = createAction(
  ArticleActionTypes.FETCH_ARTICLE, props<{ slug: string }>())

export const fetchArticleActionSuccess = createAction(
  ArticleActionTypes.FETCH_ARTICLE_SUCCESS, props<{ article: ArticlesInterface }>())

export const fetchArticleActionFailure = createAction(
  ArticleActionTypes.FETCH_ARTICLE_FAILURE)
