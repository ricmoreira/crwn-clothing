export const addItemToCart = (cartItems, cartItemToAdd) => {
    const existingCartItem = cartItems.find(
        // eslint-disable-next-line
        cartItem => cartItem.id == cartItemToAdd.id
    );

    if (existingCartItem) {
        return cartItems.map(cartItem =>
            // eslint-disable-next-line
            cartItem.id == cartItemToAdd.id
                ? { ...cartItem, quantity: cartItem.quantity + 1 }
                : cartItem
        )
    }

    return [...cartItems, { ...cartItemToAdd, quantity: 1 }]
};
