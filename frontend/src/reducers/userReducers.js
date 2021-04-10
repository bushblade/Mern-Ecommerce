import * as UC from '../constants/userConstants'

// TODO
// remove loading state

export const initialUserState = { userInfo: null, error: null, loading: false }

export function userReducer(state = initialUserState, { type, payload }) {
  switch (type) {
    case UC.USER_LOGIN_REQUEST:
    case UC.USER_DETAILS_REQUEST:
    case UC.USER_REGISTER_REQUEST:
    case UC.USER_UPDATE_PROFILE_REQUEST:
      return { ...state, loading: true }
    case UC.USER_LOGIN_SUCCESS:
    case UC.USER_DETAILS_SUCCESS:
    case UC.USER_REGISTER_SUCCESS:
      return { ...state, loading: false, userInfo: payload, error: null }
    case UC.USER_UPDATE_PROFILE_SUCCESS:
      return {
        ...state,
        loading: false,
        userInfo: payload,
        updated: true,
        error: null,
      }
    case UC.USER_REGISTER_FAIL:
    case UC.USER_LOGIN_FAIL:
    case UC.USER_UPDATE_PROFILE_FAIL:
      return { loading: false, error: payload }
    case UC.USER_DETAILS_FAIL:
      return { ...state, loading: false, error: null }
    case UC.USER_LOGOUT:
      return initialUserState
    default:
      return state
  }
}
