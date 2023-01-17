import Page from "../../components/Page";
import {Container, Grid} from "@mui/material";
import * as React from "react";
import {useSelector} from "react-redux";
import CartContent from "./components/CartContent";
import ShipingCard from "./components/ShipingCard";
import ButtonsOrder from "./components/DoneOrder";


export default function Order() {
    const cart = useSelector(state => state.cart).sort((a, b) => a.elementOrder - b.elementOrder);
    return (
        <Page title="HNP Cosul tau">
            <Container maxWidth="xl">
                <Grid sx={{flexGrow: 1}} container spacing={3}>
                    <Grid item xs={12} md={8}>
                        <CartContent cart={cart}/>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <ShipingCard cart={cart}/>
                        <ButtonsOrder cart={cart}/>
                    </Grid>
                </Grid>
            </Container>
        </Page>
    );
}