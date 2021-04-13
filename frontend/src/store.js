import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import {
  productListReducer,
  productDetailsReducer,
} from './reducers/productReducers'
import { cartReducer, initialCartState } from './reducers/cartReducer'
import { userReducer, initialUserState } from './reducers/userReducers'

const reducer = combineReducers({
  productList: productListReducer,
  productDetails: productDetailsReducer,
  cart: cartReducer,
  user: userReducer,
})

const { cartItems, shippingAddress, userInfo } = localStorage
const { parse } = JSON

const initialState = {
  cart: {
    cartItems: cartItems ? parse(cartItems) : [],
    shippingAddress: shippingAddress
      ? parse(shippingAddress)
      : { ...initialCartState.shippingAddress },
  },
  user: {
    ...initialUserState,
    userInfo: userInfo ? parse(userInfo) : null,
  },
}

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(thunk))
)

// subscription
let currentState = store.getState()

store.subscribe(() => {
  // keep track of the previous and current state to compare changes
  let previousState = currentState
  currentState = store.getState()
  // if the cartItems change - set in localStorage
  if (previousState.cart.cartItems !== currentState.cart.cartItems) {
    localStorage.setItem(
      'cartItems',
      JSON.stringify(currentState.cart.cartItems)
    )
  }
  // shipping address in LS
  if (
    previousState.cart.shippingAddress !== currentState.cart.shippingAddress
  ) {
    localStorage.setItem(
      'shippingAddress',
      JSON.stringify(currentState.cart.shippingAddress)
    )
  } // paymentMethod in LS
  if (previousState.cart.paymentMethod !== currentState.cart.paymentMethod) {
    localStorage.setItem(
      'paymentMethod',
      JSON.stringify(currentState.cart.paymentMethod)
    )
  }
  // if the userLogin changes then set in localStorage
  // NOTE could remove this and rely on fetching from API when app first loads
  // using token in cookie
  if (previousState.user.userInfo !== currentState.user.userInfo) {
    localStorage.setItem('userInfo', JSON.stringify(currentState.user.userInfo))
  }
})

export default store
