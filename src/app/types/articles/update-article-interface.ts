import {BackendErrorsInterface} from '../beckend-erorrs/backend-errors.interface';
import {ArticlesInterface} from './articles-interface';

export interface UpdateArticleStateInterface {
  isLoading: boolean
  isSubmitting: boolean
  validationErrors: BackendErrorsInterface | null
  article: ArticlesInterface | null
}
