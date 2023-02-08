import Page from "../../components/Page";
import {Container, Grid} from "@mui/material";
import * as React from "react";
import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {getDocumentById} from "../../FireBase/actions";
import CartContent from "./components/CartContent";
import ShipingCard from "./components/ShipingCard";
import UserOrderDetails from "./components/UserOrderDetails";

export default function OrderDetails() {

    let {orderId} = useParams();
    const [cart, setCart] = useState([]);
    const [order, setOrder] = useState();
    const [company, setCompany] = useState();
    useEffect(async () => {
        orderId = 'QBOKrAVTDvckeOmIoNoI';
        const dbOrder = await getDocumentById('orders', orderId);
        const company = await getDocumentById('partners', dbOrder.user.companyId);
        setCompany(company)
        setCart(dbOrder.orderDetails);
        setOrder(dbOrder);
    }, [])


    return (
        <Page title="HNP Cosul tau">
            <Container maxWidth="xl">
                <Grid container spacing={3}>
                    <Grid item xs={12} md={12}>
                        {company && order ?
                            <UserOrderDetails
                                order={order}
                                company={company}
                            /> : ""}
                    </Grid>
                    <Grid item xs={12} md={12}>
                        <Grid container spacing={3}>
                            <Grid item xs={12} md={8}>
                                <CartContent cart={cart}/>
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <ShipingCard cart={cart}/>
                            </Grid>
                        </Grid>

                    </Grid>
                </Grid>
            </Container>
        </Page>
    );
}