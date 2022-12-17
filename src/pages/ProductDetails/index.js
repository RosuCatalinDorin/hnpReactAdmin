import {Link as RouterLink, useParams} from 'react-router-dom';
// material
import {Button, Container, Grid, Stack, Typography} from '@mui/material';
// components
import Page from '../../components/Page';
import Iconify from '../../components/Iconify';
import ImageList from './components/ImageList';
//
import useProductDetails from '../ProductDetails/hooks/useProductDetails';
import {useEffect} from "react";

export default function Blog() {
    let {id} = useParams();
    id = id.split('param')[1];

    const [product, setProductDetails] = useProductDetails(null);

    useEffect(() => {
        setProductDetails(id);
    }, []);

    return (
        <Page title="Detalii produs">
            {product ?
                <Container>
                    <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
                        <Typography variant="h4" gutterBottom>
                            {product._source.ARTICLE_DETAILS.DESCRIPTION_SHORT}
                        </Typography>
                        <Button
                            variant="contained"
                            component={RouterLink}
                            to="#"
                            startIcon={<Iconify icon="eva:plus-fill"/>}
                        >
                            Adauga in cos
                        </Button>
                    </Stack>

                    <Stack direction="row" spacing={1}>
                        <Grid container>
                            <ImageList data={product._source.MIME_INFO.MIME}/>
                        </Grid>
                        <Grid container spacing={3}>
                            {/*          <ProductDetails
                                data={product}
                            />*/}
                        </Grid>
                    </Stack>
                </Container> : <></>}
        </Page>
    );
}
