## Things to change

Users cart should be stored in database so not mutable by client.

Don't redirect to /cart when clicking Add To Cart

prices in cents and convert for better calculation accuracy and formatting using
utils/formatMoney

redirect in LoginScreen always evaluates to truthy so pointless ternary in
Link.

## Things changed 

Used Snowpack instead of CRA for faster development.

Removed loading state from productReducer for better performance and UX.

Instance of axios in utils/api.js.

Fixed position Navbar - no janky content shifting on mobile when the menu is
opened.

Redux subscription for cartItems in LS - simpler less repetitive.

Redux subscription for userLogin

Stick with identifying product by \_id  rather than renaming as product.

userController sends back more specific responses for not found or wrong
password.

userController getUserProfile function doesn't need to fetch the user from the DB it already has it in the req from the authMiddleWare.
