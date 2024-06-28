import {Card, Grid, Typography} from "@mui/material";
import * as React from "react";
import {parseDate} from "../../../utils/utils";

export default function UserOrderDetails(props) {

    const {company, order} = props;
    return (
        <Card>
            <Grid container spacing={1} sx={{p: 4}} xs={12} md={12}>
                <Grid item xs={12} md={6}>
                    <Typography variant="h6" sx={{mb: 1, display: 'flex'}}>
                        Detalii comanda
                    </Typography>
                    <Typography sx={{mt: 0.7}}
                                variant="inherit">{order.user.displayName + " - " + company.name}</Typography>
                    <Typography sx={{mt: 0.7}} variant="inherit">{order.user.email}</Typography>
                    <Typography sx={{mt: 0.7}} variant="inherit">{order.user.phone}</Typography>
                    <Typography sx={{mt: 1.7}} variant="inherit"><b>Comanda plasata</b></Typography>
                    <Typography sx={{mt: 0.7}} variant="inherit">{parseDate(order.dateAdd)}</Typography>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Typography sx={{mt: 0.7}} variant="inherit"><b>Adresa livrare</b></Typography>
                    <Typography sx={{mt: 1.7}}
                                variant="inherit">{order.address.adress + ", " + order.address.oras + ", " + order.address.judet}</Typography>
                </Grid>
            </Grid>
        </Card>
    )
}