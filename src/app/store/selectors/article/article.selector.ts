import {AppStateInterface} from '../../../types/app-state/app-state-interface';
import {createSelector} from '@ngrx/store';
import {ArticleStateInterface} from '../../../types/articles/article-state-interface';

export const articleFeatureSelector = (state: AppStateInterface): ArticleStateInterface => state.article


export const isLoadingArticleSelector = createSelector(
  articleFeatureSelector, state => state.isLoading)

export const errorArticleSelector = createSelector(
  articleFeatureSelector, state => state.error)

export const articleSelector = createSelector(
  articleFeatureSelector, state => state.data)
