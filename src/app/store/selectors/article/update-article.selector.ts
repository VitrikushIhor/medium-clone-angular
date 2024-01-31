import {AppStateInterface} from '../../../types/app-state/app-state-interface';
import {createSelector} from '@ngrx/store';
import {UpdateArticleStateInterface} from '../../../types/articles/update-article-interface';

export const updateArticleFeatureSelector = (state: AppStateInterface): UpdateArticleStateInterface => state.updateArticle


export const updateArticleIsSubmittingSelector = createSelector(
  updateArticleFeatureSelector, state => state.isSubmitting)

export const updateArticleErrorSelector = createSelector(
  updateArticleFeatureSelector, state => state.validationErrors)

export const updateArticleIsLoadingSelector  = createSelector(
  updateArticleFeatureSelector, state => state.isLoading)

export const updateArticleSelector = createSelector(
  updateArticleFeatureSelector, state => state.article)
