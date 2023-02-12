import {Box, Card, Divider, Grid, Typography} from "@mui/material";
import {getClientFinalPrice, getTotal} from "../../../utils/utils";
import * as React from "react";
import {useRef} from "react";
import {fCurrency} from "../../../utils/formatNumber";
import {SHIPING_COST} from "../constants";

export default function ShipingCard(props) {
    const {cart} = props;
    const discount = useRef(5)
    const subTotal = getTotal(cart)
    const totalCost = getClientFinalPrice(subTotal, discount.current, 0)
    const totalDiscount = (subTotal - totalCost).toFixed(2);
    return (
        <Card>
            <Grid container spacing={1} sx={{p: 4}} xs={12} md={12}>
                <Grid item xs={12} md={12}>
                    <Typography variant="h6" sx={{mb: 1, display: 'flex'}}>
                        Sumar comanda
                    </Typography>
                </Grid>
                <Grid item xs={12} md={12}>
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                    }}>
                        <Typography variant="inherit">Sub Total</Typography>
                        <Typography variant="inherit"> {fCurrency(subTotal)} </Typography>

                    </Box>
                </Grid>
                <Grid item xs={12} md={12}>

                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                    }}>
                        <Typography variant="inherit">Reducere client</Typography>
                        <Typography variant="inherit"> {discount.current + " %"} </Typography>

                    </Box>
                </Grid>
                <Grid item xs={12} md={12}>
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        mb: 2
                    }}>
                        <Typography variant="inherit">Cost livrare</Typography>
                        <Typography variant="inherit"> {fCurrency(SHIPING_COST)} </Typography>

                    </Box>
                    <Divider/>
                </Grid>
                <Grid item xs={12} md={12}>
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                    }}>
                        <Typography variant="h5"><b>Total</b></Typography>
                        <Typography sx={{color: 'red'}}
                                    variant="h5"><b> {fCurrency(totalCost)}</b></Typography>
                    </Box>

                    <Typography
                        variant="caption">Ti sa aplicat o reducere personalizata de
                        <b> {fCurrency(totalDiscount)} </b></Typography>
                </Grid>
            </Grid>
        </Card>
    );
}