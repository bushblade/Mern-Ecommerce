import {
  CART_ADD_ITEM,
  CART_REMOVE_ITEM,
  CART_SAVE_SHIPPING_ADDRESS,
} from '../constants/cartConstants'

// TODO
// increment item in cart when added
// rather than overwrite with payload

const isCurrentlyInCart = (state, payload) =>
  state.cartItems.find((item) => item._id === payload._id)

export const initialCartState = {
  cartItems: [],
  shippingAddress: {
    address: '',
    postalCode: '',
    city: '',
    country: '',
  },
}

export function cartReducer(state = initialCartState, { type, payload }) {
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
    case CART_SAVE_SHIPPING_ADDRESS:
      return {
        ...state,
        shippingAddress: payload,
      }
    default:
      return state
  }
}
