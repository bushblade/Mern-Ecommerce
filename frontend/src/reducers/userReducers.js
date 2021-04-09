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

const initialState = { userInfo: null }

export function userLoginReducer(state = initialState, { type, payload }) {
  switch (type) {
    case USER_LOGIN_REQUEST:
    case USER_DETAILS_REQUEST:
      return { loading: true }
    case USER_LOGIN_SUCCESS:
    case USER_DETAILS_SUCCESS:
      return { loading: false, userInfo: payload }
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

// NOTE userLoginReducer and userRegisterReducer do the same thing so could
// combine them into one reducer

export function userRegisterReducer(state = initialState, { type, payload }) {
  switch (type) {
    case USER_REGISTER_REQUEST:
      return { loading: true }
    case USER_REGISTER_SUCCESS:
      return { loading: false, userInfo: payload }
    case USER_REGISTER_FAIL:
      return { loading: false, error: payload }
    default:
      return state
  }
}
