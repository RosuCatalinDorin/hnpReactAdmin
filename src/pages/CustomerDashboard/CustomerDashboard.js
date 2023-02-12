import Page from "../../components/Page";
import {Container, Grid} from "@mui/material";
import * as React from "react";
import OrderListView from "../Order/OrderListView";
import NotificationInfo from "../../components/NotificationInfo";
import UserLocation from "./components/UserLocation";


export default function CustomerDashboard() {

    return (
        <Page title="HNP Cosul tau">
            <Container maxWidth="xl">
                <NotificationInfo/>
                <Grid sx={{flexGrow: 1}} container spacing={3}>
                    <Grid item xs={12} md={9}>
                        <OrderListView
                            user={true}
                            title="Comenzile mele"
                        />
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <UserLocation/>
                    </Grid>
                </Grid>
            </Container>
        </Page>)
}