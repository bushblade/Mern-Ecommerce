import { CART_ADD_ITEM, CART_REMOVE_ITEM } from '../constants/cartConstants'

// TODO
// increment item in cart when added
// rather than overwrite with payload

const isCurrentlyInCart = (state, payload) =>
  state.cartItems.find((item) => item._id === payload._id)

export function cartReducer(
  state = {
    cartItems: [],
  },
  { type, payload }
) {
  switch (type) {
    case CART_ADD_ITEM:
      if (isCurrentlyInCart(state, payload)) {
        return {
          ...state,
          cartItems: state.cartItems.map((item) =>
            item._id === payload._id ? payload : item
          ),
        }
      }
      return {
        ...state,
        cartItems: [...state.cartItems, payload],
      }
    case CART_REMOVE_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.filter((item) => item._id !== payload),
      }

    default:
      return state
  }
}
