import {useNavigate} from 'react-router-dom';
// material
import {Grid, Button, Container, Stack, Typography} from '@mui/material';
// components
import Page from '../components/Page';
import Iconify from '../components/Iconify';
import {BlogPostCard, BlogPostsSort, BlogPostsSearch} from '../sections/@dashboard/blog';
//
import {useEffect, useState} from "react";
import {getBlogs} from "../FireBase/BlogAction";

// ----------------------------------------------------------------------

const SORT_OPTIONS = [
    {value: 'desc', label: 'Noi'},
    {value: 'asc', label: 'Vechi'}
];

// ----------------------------------------------------------------------

export default function Blog() {
    const [POSTS, setPosts] = useState([]);
    const [order, setOrder] = useState('desc')
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
        <Page title="Dashboard: Blog | Minimal-UI">
            <Container>
                <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
                    <Typography variant="h4" gutterBottom>
                        Noutati HNP
                    </Typography>
                    <Button
                        variant="contained"
                        onClick={() => {
                            navigate('/dashboard/addNews')
                        }}
                        startIcon={<Iconify icon="eva:plus-fill"/>}
                    >
                        New Post
                    </Button>
                </Stack>

                <Stack mb={5} direction="row" alignItems="center" justifyContent="space-between">
                    <BlogPostsSearch posts={POSTS} />
                    <BlogPostsSort options={SORT_OPTIONS} onSort={(newSort)=>{
                        setOrder(newSort.target.value)
                    }}/>
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
