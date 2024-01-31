import {createAction, props} from '@ngrx/store';
import {ArticlesInterface} from '../../../types/articles/articles-interface';
import {FavoritesActionType} from '../../action-types/favorites/favorites-action-type';

export const addToFavoritesAction = createAction(
  FavoritesActionType.ADD_TO_FAVORITES, props<{ isFavorited: boolean, slug: string }>())

export const addToFavoritesActionSuccess = createAction(
  FavoritesActionType.ADD_TO_FAVORITES_SUCCESS, props<{ article: ArticlesInterface }>())

export const addToFavoritesActionFailure = createAction(
  FavoritesActionType.ADD_TO_FAVORITES_FAILURE)
