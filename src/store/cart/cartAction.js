import * as actions from './actionTypes.js';

const addToCart = (product) => {
    return {
        type: actions.ADD_TO_CART,
        payload: product,
    };
};

export const addToCartRedux = (product, cart) => {

    let newCart = JSON.parse(JSON.stringify(cart));

    let findProduct = cart.find((item) => item['_id'] === product['_id']);

    if (findProduct) {
        findProduct.quantity++;
        const cart = newCart.filter((item) => {
            return item['_id'] !== product['_id']
        });
        cart.push(findProduct);
        newCart = cart;

    } else {
        product.elementOrder = cart.length + 1;
        product.quantity = 1;
        newCart.push(product);
    }


    return addToCart(newCart);
}

export const removeQuantity = (product, cart) => {
    let newCart = JSON.parse(JSON.stringify(cart));

    let findProduct = cart.find((item) => item['_id'] === product['_id']);

    if (findProduct) {
        if (findProduct.quantity === 1) {
            return removeFromCart(product, newCart);
        }
        findProduct.quantity--;
        const cart = newCart.filter((item) => {
            return item['_id'] !== product['_id']
        });
        cart.push(findProduct);
        newCart = cart;
    }
    return addToCart(newCart);
}

export const removeFromCart = (product, cart) => {
    const newCart = cart.filter((item) => {
        return item['_id'] !== product['_id']
    });
    return addToCart(newCart);
}

