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
    // case PRODUCT_LIST_REQUEST:
    //   return { ...state, loading: true }
    case PRODUCT_LIST_SUCCESS:
      return { loading: false, products: payload }
    case PRODUCT_LIST_FAIL:
      return { loading: false, error: payload }
    default:
      return state
  }
}

export function productDetailsReducer(
  state = { product: { reviews: [] } },
  { type, payload }
) {
  switch (type) {
    // case PRODUCT_DETAILS_REQUEST:
    //   return { ...state, loading: true }
    case PRODUCT_DETAILS_SUCCESS:
      return { loading: false, product: payload }
    case PRODUCT_DETAILS_FAIL:
      return { ...state, loading: false, error: payload }
    default:
      return state
  }
}
