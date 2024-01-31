import {createReducer, on} from '@ngrx/store';
import {routerNavigatedAction} from '@ngrx/router-store';
import {ArticleStateInterface} from '../../../types/articles/article-state-interface';
import {
  getArticleAction,
  getArticleActionFailure,
  getArticleActionSuccess,
} from '../../actions/article/get-article.action';

const initialState: ArticleStateInterface = {
  data: null,
  isLoading: false,
  error: null,
}


export const articleReducer = createReducer(
  initialState,
  // article
  on(getArticleAction, (state) => ({
    ...state,
    isLoading: true,
  })),
  on(getArticleActionSuccess, (state, {article}) => ({
    ...state,
    isLoading: false,
    data: article,
  })),
  on(getArticleActionFailure, (state) => ({
    ...state,
    isLoading: false,
  })),

//   router
  on(routerNavigatedAction, (state) => initialState),
)
