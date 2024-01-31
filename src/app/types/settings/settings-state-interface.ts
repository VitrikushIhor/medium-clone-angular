import {BackendErrorsInterface} from '../beckend-erorrs/backend-errors.interface';

export interface SettingsStateInterface {
  isSubmitting: boolean
  validationErrors: BackendErrorsInterface | null
}
