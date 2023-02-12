import {useNavigate} from 'react-router-dom';
// material
import {Button, Container, Grid, Stack, Typography} from '@mui/material';
// components
import Page from '../../components/Page';
import Iconify from '../../components/Iconify';
import {BlogPostCard} from '../../sections/@dashboard/blog';
//
import {useEffect, useState} from "react";
import {getBlogs} from "../../FireBase/BlogAction";
import {useAuth} from "../../Auth";
import NotificationInfo from "../../components/NotificationInfo";

// ----------------------------------------------------------------------

const SORT_OPTIONS = [
    {value: 'desc', label: 'Noi'},
    {value: 'asc', label: 'Vechi'}
];

// ----------------------------------------------------------------------

export default function Index() {
    const [POSTS, setPosts] = useState([]);
    const [order, setOrder] = useState('desc')
    const {currentUser} = useAuth();
    const navigate = useNavigate();

    useEffect(async () => {
        await getBlogData();
    }, [])

    async function getBlogData() {
        const data = await getBlogs(order);
        setPosts(data);

    }

    useEffect(async () => {
        await getBlogData();
    }, [order])

    return (
        <Page title="Noutati | HNP">
            <Container maxWidth="xl">
                <NotificationInfo/>
                <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
                    <Typography variant="h4" gutterBottom>
                        Noutati HNP
                    </Typography>

                    {currentUser.userDetails && currentUser.userDetails.role === 'ROLE_ADMIN'
                        ? < Button
                            variant="contained"
                            onClick={() => {
                                navigate('/dashboard/addNews')
                            }}
                            startIcon={<Iconify icon="eva:plus-fill"/>}
                        >
                            New Post
                        </Button>
                        : ""
                    }

                </Stack>

                <Stack mb={5} direction="row" alignItems="center" justifyContent="space-between">
                    {/*   <BlogPostsSearch posts={POSTS}/>*/}
                    {/*          <BlogPostsSort options={SORT_OPTIONS} value={order} onSort={(newSort) => {
                        setOrder(newSort.target.value)
                    }}/>*/}
                </Stack>

                <Grid container spacing={3}>
                    {POSTS.map((post, index) => (
                        <BlogPostCard key={post.id} post={post} index={index}/>
                    ))}
                </Grid>
            </Container>
        </Page>
    );
}
