export enum AuthActionTypes {
  REGISTER = '[Auth] Register',
  REGISTER_SUCCESS = '[Auth] Register success',
  REGISTER_FAILURE = '[Auth] Register failure',

  LOGIN = '[Auth] LOGIN',
  LOGIN_SUCCESS = '[Auth] LOGIN success',
  LOGIN_FAILURE = '[Auth] LOGIN failure',

  GET_CURRENT_USER = '[Auth] GET_CURRENT_USER',
  GET_CURRENT_USER_SUCCESS = '[Auth] GET_CURRENT_USER success',
  GET_CURRENT_USER_FAILURE = '[Auth] GET_CURRENT_USER failure',

  UPDATE_CURRENT_USER = '[Auth] UPDATE_CURRENT_USER',
  UPDATE_CURRENT_USER_SUCCESS = '[Auth] UPDATE_CURRENT_USER success',
  UPDATE_CURRENT_USER_FAILURE = '[Auth] UPDATE_CURRENT_USER failure',

  LOGOUT = '[Auth] LOGOUT',
}
