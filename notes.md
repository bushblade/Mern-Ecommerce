## Things to change

Users cart should be stored in database so not mutable by client.

Don't redirect to /cart when clicking Add To Cart

prices in cents and convert for better calculation accuracy and formatting using
utils/formatMoney

redirect in LoginScreen always evaluates to truthy so pointless ternary in
Link.

Why do we have separate state for a registered user to a login user?
Also the logout action doesn't need to return a function in the course code.
Lot of replicating of same data - useInfo, userDetails, userRegister should be
just one user.

remove storing of userInfo in LS - stick with cookie to fetch userInfo.
Add a useEffect in App.jsx to fetch the user when app first loads.

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

Removed userDetails from ProfileScreen as it's a duplicate of userInfo that we
already have.

### Added Caddy to develop on https

Make sure [Caddy](https://caddyserver.com/) is installed on system and run
`caddy run` in the project root. 

Backend is available on https://localhost:5555
Frontend is available on https://localhost:3000
