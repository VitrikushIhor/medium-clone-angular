import {createAction, props} from '@ngrx/store';
import {ArticleActionTypes} from '../../action-types/article/article-action-types';
import {ArticleInputInterface} from '../../../types/articles/article-input-interface';
import {BackendErrorsInterface} from '../../../types/beckend-erorrs/backend-errors.interface';
import {ArticlesInterface} from '../../../types/articles/articles-interface';

export const updateArticleAction = createAction(
  ArticleActionTypes.UPDATE_ARTICLE, props<{ slug: string, articleInput: ArticleInputInterface }>())

export const updateArticleActionSuccess = createAction(
  ArticleActionTypes.UPDATE_ARTICLE_SUCCESS, props<{ article: ArticlesInterface }>())

export const updateArticleActionFailure = createAction(
  ArticleActionTypes.UPDATE_ARTICLE_FAILURE, props<{ errors: BackendErrorsInterface }>())
