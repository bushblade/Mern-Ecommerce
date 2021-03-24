import api from '../utils/api'
import { CART_ADD_ITEM, CART_REMOVE_ITEM } from '../constants/cartConstants'

export function addToCart(id, qty) {
  return async function (dispatch, getState) {
    const { data } = await api.get(`/products/${id}`)
    dispatch({
      type: CART_ADD_ITEM,
      payload: {
        ...data,
        qty,
      },
    })
    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
  }
}
