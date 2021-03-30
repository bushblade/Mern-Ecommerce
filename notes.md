## Things to change

Users cart should be stored in database so not mutable by client.

Don't redirect to /cart when clicking Add To Cart

prices in cents and convert for better calculation accuracy and formatting using
utils/formatMoney

## Things changed 

Removed loading state from productReducer for better performance and UX.

Instance of axios in utils/api.js

Fixed position Navbar - no janky content shifting on mobile

Redux subscription for cartItems in LS - simpler less repetitive

Stick with identifying product by \_id  rather than renaming as product

userController sends back more specific responses for not found or wrong
password
