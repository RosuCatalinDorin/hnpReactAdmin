import {ORDER_STEPS} from "./constants"
import {getClientFinalPrice, getTotal} from "../../utils/utils";
import {saveOrder} from "../../FireBase/actions";
import {emailComandaNoua, emailComandaTrimisaSpreHnp} from "../../emailjs/emailjs";

export const saveOrderAction = (cart, address, user, clearCart) => {

    //todo: de implementat userDiscount.
    user.userDiscount = 5
    const subTotal = getTotal(cart)
    const totalCost = getClientFinalPrice(subTotal, user.userDiscount, 0)
    const totalDiscount = (subTotal - totalCost).toFixed(2);
    const order = {
        subTotal: parseFloat(subTotal),
        totalCost: parseFloat(totalCost),
        totalDiscount: parseFloat(totalDiscount),
        userDiscount: parseFloat(user.userDiscount),
        orderDetails: cart,
        address: address[0],
        statusId: ORDER_STEPS.process.id,
        statusDescription: ORDER_STEPS.process.description,
        dateAdd: new Date(),
        user: {
            uid: user.uid,
            ...user.userDetails
        }
    }
    saveOrder(order).then(((docRef) => {
        emailComandaTrimisaSpreHnp(user, docRef.id)
        emailComandaNoua(docRef.id)
        clearCart()
        console.log("Document written with ID: ", docRef.id);
    })).catch(() => {

    })

}