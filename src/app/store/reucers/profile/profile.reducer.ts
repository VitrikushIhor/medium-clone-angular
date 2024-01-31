import {ProfileStateInterface} from '../../../types/profile/profile-state-interface';
import {createReducer, on} from '@ngrx/store';
import {
  getProfileAction,
  getProfileActionFailure,
  getProfileActionSuccess,
} from '../../actions/profile/profile.actions';

const initialState: ProfileStateInterface = {
  data: null,
  error: null,
  isLoading: false,
}


export const profileReducer = createReducer(
  initialState,
  on(getProfileAction, (state) => ({
    ...state,
    isLoading: true,
  })),
  on(getProfileActionSuccess, (state, {userProfile}) => ({
    ...state,
    isLoading: false,
    data: userProfile,
  })),
  on(getProfileActionFailure, (state, {}) => ({
    ...state,
    isLoading: false,
  })),
)
