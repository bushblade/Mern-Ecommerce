import api from '../utils/api'
import { CART_ADD_ITEM, CART_REMOVE_ITEM } from '../constants/cartConstants'

// NOTE
// addToCart doesn't need to request product
// from API as we already have it
export function addToCart(id, qty) {
  return async function (dispatch) {
    const { data } = await api.get(`/products/${id}`)
    dispatch({
      type: CART_ADD_ITEM,
      payload: {
        ...data,
        qty,
      },
    })
  }
}

export function removeFromCart(id) {
  return {
    type: CART_REMOVE_ITEM,
    payload: id,
  }
}
