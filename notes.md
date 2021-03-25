## Things to change

Users cart should be stored in database so not mutable by client.

Remove local storage from actions, would be better in a redux subscription.

Don't redirect to /cart when clicking Add To Cart

## Things changed 

Removed loading state from productReducer for better performance and UX.

Instance of axios utils/api.js
