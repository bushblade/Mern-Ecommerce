import api from '../utils/api'
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

export function register(name, email, password) {
  return async function (dispatch) {
    try {
      dispatch({
        type: USER_REGISTER_REQUEST,
      })
      const { data } = await api.post('/users', { name, email, password })
      dispatch({
        type: USER_REGISTER_SUCCESS,
        payload: data,
      })
      dispatch({
        type: USER_LOGIN_SUCCESS,
        payload: data,
      })
    } catch (err) {
      dispatch({
        type: USER_REGISTER_FAIL,
        payload: err.response?.data?.message || err.message,
      })
    }
  }
}

export function getUserDetails(id) {
  return async function (dispatch) {
    try {
      dispatch({
        type: USER_DETAILS_REQUEST,
      })
      const { data } = await api.get(`/users/${id}`)
      dispatch({
        type: USER_DETAILS_SUCCESS,
        payload: data,
      })
    } catch (err) {
      dispatch({
        type: USER_DETAILS_FAIL,
        payload: err.response?.data?.message || err.message,
      })
    }
  }
}
