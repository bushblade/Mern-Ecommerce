import { CART_ADD_ITEM } from '../constants/cartConstants'

// TODO
// increment item in cart when added
// rather than overwrite with payload

export function cartReducer(
  state = {
    cartItems: [],
  },
  { type, payload }
) {
  switch (type) {
    case CART_ADD_ITEM:
      if (state.cartItems.find((item) => item._id === payload._id)) {
        return {
          ...state,
          cartItems: state.cartItems.map((item) =>
            item.product === payload.product ? payload : item
          ),
        }
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, payload],
        }
      }

    default:
      return state
  }
}
