// material
import {Box, Container, Grid, Typography} from '@mui/material';
// components
import Page from '../../components/Page';
import {useAuth} from "../../Auth";
import OrderListView from "../Order/OrderListView";
// ----------------------------------------------------------------------

export default function DashboardApp() {
    const {currentUser} = useAuth()
    return (
        <Page title="Dashboard | HNP ">
            <Container maxWidth="xl">
                <Box sx={{pb: 5}}>
                    <Typography variant="h4">Salut,{currentUser.userDetails.lastName} !</Typography>
                </Box>
                <Grid container spacing={3}>

                    <OrderListView

                    />

                    {/*                    <Grid item xs={12} sm={6} md={3}>
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
                    </Grid>*/}
                    {/*          <Grid item xs={12} md={6} lg={8}>
                        <AppWebsiteVisits/>
                    </Grid>*/}
                    {/*

          <Grid item xs={12} md={6} lg={4}>
            <AppCurrentVisits />
          </Grid>

          <Grid item xs={12} md={6} lg={8}>
            <AppConversionRates />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <AppCurrentSubject />
          </Grid>

          <Grid item xs={12} md={6} lg={8}>
            <AppNewsUpdate />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <AppOrderTimeline />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <AppTrafficBySite />
          </Grid>

          <Grid item xs={12} md={6} lg={8}>
            <AppTasks />
          </Grid>

          */}

                </Grid>

            </Container>
        </Page>
    );
}
