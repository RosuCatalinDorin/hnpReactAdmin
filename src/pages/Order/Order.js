import Page from "../../components/Page";
import {Box, Container, Grid} from "@mui/material";
import * as React from "react";
import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import CartContent from "./components/CartContent";
import ShipingCard from "./components/ShipingCard";
import ButtonsOrder from "./components/DoneOrder";
import {addToCartRedux, removeFromCart, removeQuantity} from "../../store/cart/cartAction";
import NotificationInfo from "../../components/NotificationInfo";
import SelectOrderDelivaryAdress from "./components/SelectOrderDelivaryAdress";

export default function Order() {
    const cart = useSelector(state => state.cart).sort((a, b) => a.elementOrder - b.elementOrder);
    const dispatch = useDispatch();
    const [address, setAddress] = useState(null);
    const [addressError, setAddressError] = useState(true);

    const handleAddToCart = (product) => {
        dispatch(addToCartRedux(product, cart));
    }
    const handleRemoveQuantity = (product) => {
        dispatch(removeQuantity(product, cart));
    }

    const handleRemoveProduct = (product) => {
        dispatch(removeFromCart(product, cart));
    }


    return (
        <Page title="HNP Cosul tau">
            <Container maxWidth="xl">
                <NotificationInfo/>
                <Grid sx={{flexGrow: 1}} container spacing={3}>
                    <Grid item xs={12} md={8}>
                        <CartContent cart={cart}
                                     handleAddToCart={handleAddToCart}
                                     handleRemoveQuantity={handleRemoveQuantity}
                                     handleRemoveProduct={handleRemoveProduct}
                        />
                    </Grid>

                    <Grid item xs={12} md={4}>
                        <ShipingCard cart={cart}/>
                        <Box sx={{mt: 2}}>
                            <SelectOrderDelivaryAdress
                                error={addressError}
                                setAddressError={setAddressError}
                                setAddress={setAddress}
                            />
                        </Box>
                        <ButtonsOrder cart={cart}
                                      address={address}
                                      addressError={addressError}
                                      setAddressError={setAddressError}
                        />
                    </Grid>


                </Grid>
            </Container>
        </Page>
    )
        ;
}