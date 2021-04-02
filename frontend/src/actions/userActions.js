import api from '../utils/api'
import {
  USER_LOGIN_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
} from '../constants/userConstants'

export function login(email, password) {
  return async function (dispatch) {
    try {
      dispatch({
        type: USER_LOGIN_REQUEST,
      })
      const { data } = await api.post('/users/login', { email, password })
      dispatch({
        type: USER_LOGIN_SUCCESS,
        payload: data,
      })
      // TODO
      // move this to a subscription
      localStorage.setItem('userInfo', JSON.stringify(data))
    } catch (err) {
      dispatch({
        type: USER_LOGIN_FAIL,
        payload: err.response?.data?.message || err.message,
      })
    }
  }
}
