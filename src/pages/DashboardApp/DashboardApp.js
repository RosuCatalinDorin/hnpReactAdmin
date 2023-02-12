// material
import {Container, Grid} from '@mui/material';
// components
import Page from '../../components/Page';
import OrderListView from "../Order/OrderListView";
import {
    AppBugReports,
    AppConversionRates,
    AppCurrentSubject,
    AppCurrentVisits,
    AppItemOrders,
    AppNewsUpdate,
    AppNewUsers,
    AppOrderTimeline,
    AppTasks,
    AppTrafficBySite,
    AppWebsiteVisits,
    AppWeeklySales
} from "../../sections/@dashboard/app";
// ----------------------------------------------------------------------

export default function DashboardApp() {
    return (
        <Page title="Dashboard | HNP ">
            <Container maxWidth="xl">
                <Grid container spacing={3}>

                    <Grid item xs={12} sm={6} md={3}>
                        <AppWeeklySales/>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <AppNewUsers/>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <AppItemOrders/>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <AppBugReports/>
                    </Grid>

                    <Grid item sx={{m: 0}} xs={12} sm={12} md={12}>
                        <OrderListView sx={{mt: 2}}
                                       title="Comenzile  HNP"
                        />
                    </Grid>


                    <Grid item xs={12} md={6} lg={8}>
                        <AppWebsiteVisits/>
                    </Grid>


                    <Grid item xs={12} md={6} lg={4}>
                        <AppCurrentVisits/>
                    </Grid>

                    <Grid item xs={12} md={6} lg={8}>
                        <AppConversionRates/>
                    </Grid>

                    <Grid item xs={12} md={6} lg={4}>
                        <AppCurrentSubject/>
                    </Grid>

                    <Grid item xs={12} md={6} lg={8}>
                        <AppNewsUpdate/>
                    </Grid>

                    <Grid item xs={12} md={6} lg={4}>
                        <AppOrderTimeline/>
                    </Grid>

                    <Grid item xs={12} md={6} lg={4}>
                        <AppTrafficBySite/>
                    </Grid>

                    <Grid item xs={12} md={6} lg={8}>
                        <AppTasks/>
                    </Grid>


                </Grid>

            </Container>
        </Page>
    );
}
