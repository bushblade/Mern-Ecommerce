import * as PC from '../constants/productConstants'

export function productListReducer(
  state = { products: [] },
  { type, payload }
) {
  switch (type) {
    case PC.PRODUCT_LIST_SUCCESS:
      return { products: payload }
    case PC.PRODUCT_LIST_FAIL:
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
    case PC.PRODUCT_DETAILS_SUCCESS:
      return { product: payload }
    case PC.PRODUCT_DETAILS_FAIL:
      return { ...state, error: payload }
    default:
      return state
  }
}
