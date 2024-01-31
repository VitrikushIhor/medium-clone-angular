import {createAction, props} from '@ngrx/store';
import {ProfileActionTypes} from '../../action-types/profile/profile-action-types';
import {ProfileInterface} from '../../../types/profile/profile-interface';

export const getProfileAction = createAction(ProfileActionTypes.GET_USER_PROFILE, props<{ slug: string }>())
export const getProfileActionSuccess = createAction(
  ProfileActionTypes.GET_USER_PROFILE_SUCCESS, props<{ userProfile: ProfileInterface }>())
export const getProfileActionFailure = createAction(ProfileActionTypes.GET_USER_PROFILE_FAILURE)
