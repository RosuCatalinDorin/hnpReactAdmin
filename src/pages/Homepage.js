import Page from '../components/Page';
import {Container, Grid, Link, Stack, Typography} from "@mui/material";
import {Link as RouterLink} from "react-router-dom";
import NotificationInfo from "../components/NotificationInfo";


export default function Homepage() {
    return (<Page title="Dashboard: Homepage">
            <Container>
                <NotificationInfo/>
                <Stack direction="row" alignItems="center" mb={5}>
                    <Grid>
                        <img height={200} src="/static/EmilSefuLaPoze.png"/>
                    </Grid>
                    <Typography sx={{mt: 1.5, ml: 1}} underline="none" variant="h5" noWrap> Nu ai un cont
                        HNP? &nbsp; </Typography>
                    <Link sx={{mt: 1.5}} underline="always" variant="h6" component={RouterLink}
                          to="/register">
                        Creaza contul tau de test aici!
                    </Link>
                </Stack>
            </Container>
        </Page>
    );
}
