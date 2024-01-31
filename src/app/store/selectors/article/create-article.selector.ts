import {AppStateInterface} from '../../../types/app-state/app-state-interface';
import {createSelector} from '@ngrx/store';
import {CreateArticleStateInterface} from '../../../types/articles/create-article-state-interface';

export const createArticleFeatureSelector = (state: AppStateInterface): CreateArticleStateInterface => state.createArticle


export const createArticleIsSubmittingSelector = createSelector(
  createArticleFeatureSelector, state => state.isSubmitting)

export const createArticleErrorSelector = createSelector(
  createArticleFeatureSelector, state => state.validationErrors)
