import {
  // PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_FAIL,
  PRODUCT_LIST_SUCCESS,
  // PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_SUCCESS,
  PRODUCT_DETAILS_FAIL,
} from '../constants/productConstants'

export function productListReducer(
  state = { products: [] },
  { type, payload }
) {
  switch (type) {
    case PRODUCT_LIST_SUCCESS:
      return { products: payload }
    case PRODUCT_LIST_FAIL:
      return { error: payload }
    default:
      return state
  }
}

export function productDetailsReducer(
  state = { product: { reviews: [] } },
  { type, payload }
) {
  switch (type) {
    case PRODUCT_DETAILS_SUCCESS:
      return { product: payload }
    case PRODUCT_DETAILS_FAIL:
      return { ...state, error: payload }
    default:
      return state
  }
}
