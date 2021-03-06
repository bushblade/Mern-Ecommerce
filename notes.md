## Things to change

Users cart should be stored in database so not mutable by client.

Don't redirect to /cart when clicking Add To Cart

prices in cents and convert for better calculation accuracy and formatting using
utils/formatMoney

redirect in LoginScreen always evaluates to truthy so pointless ternary in Link.

Why do we have separate state for a registered user to a login user and update a
user? its the same logic repeated 4 times with duplicate state.  Also the logout
action doesn't need to return a function in the course code.  Lot of replicating
of same data - useInfo, userDetails, userRegister should be just one user.

remove storing of userInfo in LS - stick with cookie to fetch userInfo.

If a user logs out then cart items and shipping address stay the same as what is
in LS, so would be pretty janky if a new user logs in on the same machine.

Calculate order totals on backend, not in the frontend.
This could be done automatically when a user adds to their cart in the cart
model (when implemented).

Sanitize user inputs to prevent XXS

## Things changed 

Used Snowpack instead of CRA for faster development.

Removed loading state from productReducer for better performance and UX.

Instance of axios in utils/api.js.

Fixed position Navbar - no janky content shifting on mobile when the menu is
opened.

Redux subscription for cartItems in LS - simpler less repetitive and less bug
prone.

Redux subscription for userLogin, whenever the userInfo changes LS is set
automatically saving a lot of repetition of code so less likely to introduce a
bug.

Stick with identifying product by \_id  rather than renaming as product for less
mental overhead.

userController sends back more specific responses for not found or wrong
password.

userController getUserProfile function doesn't need to fetch the user from the
DB it already has it in the req from the authMiddleWare.

Removed userDetails from ProfileScreen as it's a duplicate of userInfo that we
already have.

Removed userRegister, userUpdate and userDetails and just use one user state
instead, much simpler and less duplicate state/code with less bugs and less
mental overhead. 

Store JWT in http only cookie instead of LS, no need to attach Auth headers and
better security.

Add a useEffect in App.jsx to fetch the user when app first loads.

Remove from cart action doesn't need to return a function for Thunk, it can just
return a object.

In OrderScreen, calculate total prices in Numbers and then ouput in JSX as
String, rather than switch between numbers and strings in the calculation.  Also
don't mutate the cart object.

### Added Caddy to develop on https

Make sure [Caddy](https://caddyserver.com/) is installed on system and run
`caddy run` in the project root. 

Backend is available on https://localhost:5555
Frontend is available on https://localhost:3000
