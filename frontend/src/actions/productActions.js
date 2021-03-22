import {
  PRODUCT_DETAILS_FAIL,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_SUCCESS,
  PRODUCT_LIST_FAIL,
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
} from '../constants/productConstants'
import api from '../utils/api'

export function listProducts() {
  return async function (dispatch) {
    try {
      dispatch({ type: PRODUCT_LIST_REQUEST })
      const { data } = await api.get('/products')
      dispatch({
        type: PRODUCT_LIST_SUCCESS,
        payload: data,
      })
    } catch (err) {
      dispatch({
        type: PRODUCT_LIST_FAIL,
        payload: err.response?.data?.message || err.message,
      })
    }
  }
}

export function listProductDetails(id) {
  return async function (dispatch) {
    try {
      dispatch({ type: PRODUCT_DETAILS_REQUEST })
      const { data } = await api.get(`/products/${id}`)
      dispatch({
        type: PRODUCT_DETAILS_SUCCESS,
        payload: data,
      })
    } catch (err) {
      dispatch({
        type: PRODUCT_DETAILS_FAIL,
        payload: err.response?.data?.message || err.message,
      })
    }
  }
}
