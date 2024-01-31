import {createReducer, on} from '@ngrx/store';
import {UpdateArticleStateInterface} from '../../../types/articles/update-article-interface';
import {
  updateArticleAction,
  updateArticleActionFailure,
  updateArticleActionSuccess,
} from '../../actions/article/update-article-action';
import {
  fetchArticleAction,
  fetchArticleActionFailure,
  fetchArticleActionSuccess,
} from '../../actions/article/fetch-article.action';

const initialState: UpdateArticleStateInterface = {
  article: null,
  isLoading: false,
  isSubmitting: false,
  validationErrors: null,
}


export const updateArticleReducer = createReducer(
  initialState,
  // article
  on(updateArticleAction, (state) => ({
    ...state,
    isSubmitting: true,
  })),
  on(updateArticleActionSuccess, (state, {article}) => ({
    ...state,
    isSubmitting: false,
  })),
  on(updateArticleActionFailure, (state, {errors}) => ({
    ...state,
    isSubmitting: false,
    validationErrors: errors,
  })),

//   fetchArticle

  on(fetchArticleAction, (state) => ({
    ...state,
    isLoading: true,
  })),
  on(fetchArticleActionSuccess, (state, {article}) => ({
    ...state,
    isLoading: false,
    article: article,
  })),
  on(fetchArticleActionFailure, (state) => ({
    ...state,
    isLoading: false,
  })),
)
