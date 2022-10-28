import {Link as RouterLink, useParams} from 'react-router-dom';
// material
import {Grid, Button, Container, Stack, Typography} from '@mui/material';
// components
import Page from '../../components/Page';
import Iconify from '../../components/Iconify';
import ProductDetails from './components/ProductDetails';
import ImageList from './components/ImageList';
//
import useProductDetails from '../ProductDetails/hooks/useProductDetails';
import {useEffect} from "react";

export default function Blog()
{
    let {id} = useParams();
    id = id.split('param')[1];

    const [product, setProductDetails] = useProductDetails();

    useEffect(() =>
    {
        setProductDetails(id);
    }, []);

    return (
        <Page title="Detalii produs">
            {product ?
                <Container>
                    <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
                        <Typography variant="h4" gutterBottom>
                            {product.DESCRIPTION_SHORT}
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
                            <ImageList data ={product}/>
                        </Grid>
                        <Grid container spacing={3}>
                            <ProductDetails
                                data={product}
                            />
                        </Grid>
                    </Stack>
                </Container> : <></>}
        </Page>
    );
}
