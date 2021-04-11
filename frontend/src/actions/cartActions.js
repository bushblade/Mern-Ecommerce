import api from '../utils/api'
import {
  CART_ADD_ITEM,
  CART_REMOVE_ITEM,
  CART_SAVE_SHIPPING_ADDRESS,
} from '../constants/cartConstants'

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

export function saveShippingAddress(data) {
  return {
    type: CART_SAVE_SHIPPING_ADDRESS,
    payload: data,
  }
}
