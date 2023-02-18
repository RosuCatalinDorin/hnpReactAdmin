export const sysDate = () => {
    let today = new Date();
    let date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    return date + ' ' + time;
}
export const parseDate = (value) => {
    const fireBaseTime = new Date(
        value.seconds * 1000 + value.nanoseconds / 1000000,
    );
    const date = fireBaseTime.toDateString();
    const atTime = fireBaseTime.toLocaleTimeString('ro-RO');
    return date + " " + atTime
}


export const getTotal = (cart) => {
    let total = 0;
    cart.forEach(item => {
        total += item.quantity * 44.99
    })
    return total.toFixed(2);
}

export const getClientFinalPrice = (subTotal, disc, shippingCost) => {
    let total = 0;
    total = subTotal - (subTotal * disc / 100) + shippingCost
    return total.toFixed(2);
}
export const BASE_URL_IMAGES = 'https://dev.hnp.ro/images/'

export const CURRANCY = "$";