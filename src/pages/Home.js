
import { Link as RouterLink } from 'react-router-dom';
// material
import { Grid, Button, Container, Stack, Typography } from '@mui/material';
// components
import Page from '../components/Page';
import Iconify from '../components/Iconify';
import { BlogPostCard, BlogPostsSort, BlogPostsSearch } from '../sections/@dashboard/blog';
//
import POSTS from '../_mocks_/blog';

// ----------------------------------------------------------------------

const SORT_OPTIONS = [
    { value: 'latest', label: 'Latest' },
    { value: 'popular', label: 'Popular' },
    { value: 'oldest', label: 'Oldest' }
];

// ----------------------------------------------------------------------

export default function Acasa() {
    return (
        <Page title="Acasa: Acasa | Minimal-UI">
            <Container>
                <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
                    <Typography variant="h4" gutterBottom>
                        Blog
                    </Typography>
                    <Button
                        variant="contained"
                        component={RouterLink}
                        to="#"
                        startIcon={<Iconify icon="eva:plus-fill" />}
                    >
                        New Post
                    </Button>
                </Stack>
            </Container>
        </Page>
    );
}
