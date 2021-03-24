import { CART_ADD_ITEM, CART_REMOVE_ITEM } from '../constants/cartConstants'

export function cartReducer(
  state = {
    cartItems: [],
  },
  { type, payload }
) {
  switch (type) {
    case CART_ADD_ITEM:
      if (state.cartItems.find((item) => item.product === payload.product)) {
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
