import {BackendErrorsInterface} from '../beckend-erorrs/backend-errors.interface';

export interface CreateArticleStateInterface {
  isSubmitting: boolean
  validationErrors: BackendErrorsInterface | null
}
