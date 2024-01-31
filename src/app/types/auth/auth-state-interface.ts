import {CurrentUserInterface} from '../user/current-user-interface';
import {BackendErrorsInterface} from '../beckend-erorrs/backend-errors.interface';

export interface AuthStateInterface {
  isSubmitting: boolean
  currentUser: CurrentUserInterface | null
  isLoggedIn: boolean | null
  validationError: BackendErrorsInterface | null
  isLoading: boolean
}
