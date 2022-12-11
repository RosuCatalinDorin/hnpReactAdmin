
import { Link as RouterLink } from 'react-router-dom';
// material

// components
import Page from '../components/Page';
import Iconify from '../components/Iconify';
import { BlogPostCard, BlogPostsSort, BlogPostsSearch } from '../sections/@dashboard/blog';
import {Button, Container, Grid, Stack, Typography} from "@mui/material";
import POSTS from "../_mocks_/blog";
//


export default function Homepage() {
    return (  <Page title="Dashboard: Homepage | Minimal-UI">
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
