import {saveFirebaseDocument} from "../../../../../FireBase/actions";

export const saveCustomerDeliveryAddress = async (data, callback) => {
    try {
        await saveFirebaseDocument('customerDeliveryAddress', data)
        if (callback) callback();
    } catch (ex) {

    }
}