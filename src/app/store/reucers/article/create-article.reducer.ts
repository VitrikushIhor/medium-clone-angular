import {createReducer, on} from '@ngrx/store';
import {CreateArticleStateInterface} from '../../../types/articles/create-article-state-interface';
import {
  createArticleAction,
  createArticleActionFailure,
  createArticleActionSuccess,
} from '../../actions/article/create-article.action';

const initialState: CreateArticleStateInterface = {
  isSubmitting: false,
  validationErrors: null,
}


export const createArticleReducer = createReducer(
  initialState,
  // article
  on(createArticleAction, (state) => ({
    ...state,
    isSubmitting: true,
  })),
  on(createArticleActionSuccess, (state) => ({
    ...state,
    isSubmitting: false,
  })),
  on(createArticleActionFailure, (state, {errors}) => ({
    ...state,
    isSubmitting: false,
    validationErrors: errors,
  })),
)
