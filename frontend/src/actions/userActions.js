import api from '../utils/api'
import {
  USER_LOGIN_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,
} from '../constants/userConstants'

export function login(email, password) {
  return async function (dispatch) {
    try {
      // TODO
      // remove USER_LOGIN_REQUEST and loading state
      dispatch({
        type: USER_LOGIN_REQUEST,
      })
      const { data } = await api.post('/users/login', { email, password })
      dispatch({
        type: USER_LOGIN_SUCCESS,
        payload: data,
      })
    } catch (err) {
      dispatch({
        type: USER_LOGIN_FAIL,
        payload: err.response?.data?.message || err.message,
      })
    }
  }
}

export function logout() {
  return async function (dispatch) {
    await api.delete('/users/logout')
    dispatch({ type: USER_LOGOUT })
  }
}
