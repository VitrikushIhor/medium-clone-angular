import {createAction, props} from '@ngrx/store';
import {ArticleActionTypes} from '../../action-types/article/article-action-types';
import {ArticleInputInterface} from '../../../types/articles/article-input-interface';
import {BackendErrorsInterface} from '../../../types/beckend-erorrs/backend-errors.interface';
import {ArticlesInterface} from '../../../types/articles/articles-interface';

export const createArticleAction = createAction(
  ArticleActionTypes.CREATE_ARTICLE, props<{ articleInput: ArticleInputInterface }>())

export const createArticleActionSuccess = createAction(
  ArticleActionTypes.CREATE_ARTICLE_SUCCESS, props<{ article: ArticlesInterface }>())

export const createArticleActionFailure = createAction(
  ArticleActionTypes.CREATE_ARTICLE_FAILURE, props<{ errors: BackendErrorsInterface }>())
