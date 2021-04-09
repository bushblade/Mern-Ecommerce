import {
  USER_DETAILS_FAIL,
  USER_DETAILS_REQUEST,
  USER_DETAILS_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,
  USER_REGISTER_FAIL,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
} from '../constants/userConstants'

// TODO
// remove loading state

const initialState = { userInfo: null, error: null, loading: false }

export function userReducer(state = initialState, { type, payload }) {
  switch (type) {
    case USER_LOGIN_REQUEST:
    case USER_DETAILS_REQUEST:
    case USER_REGISTER_REQUEST:
      return { ...state, loading: true }
    case USER_LOGIN_SUCCESS:
    case USER_DETAILS_SUCCESS:
    case USER_REGISTER_SUCCESS:
      return { ...state, loading: false, userInfo: payload }
    case USER_REGISTER_FAIL:
    case USER_LOGIN_FAIL:
      return { loading: false, error: payload }
    case USER_DETAILS_FAIL:
      return { ...state, loading: false, error: null }
    case USER_LOGOUT:
      return initialState
    default:
      return state
  }
}
