import Page from '../components/Page';
import {Container, Stack, Typography} from "@mui/material";


export default function Homepage() {
    return (<Page title="Dashboard: Homepage">
            <Container>
                <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
                    <Typography variant="h4" gutterBottom>
                        This will be the f*****g homepage!!!
                    </Typography>
                </Stack>
            </Container>
        </Page>
    );
}
