import {useParams} from 'react-router-dom';
// material
import {Card, Container, Grid, Typography} from '@mui/material';
// components
import Page from '../../components/Page';
import ImageList from './components/ImageList';
//
import useProductDetails from '../ProductDetails/hooks/useProductDetails';
import * as React from "react";
import {useEffect} from "react";
import ProductDetails from "./components/ProductDetails";
import BasicTable from "../../components/BasicTabel";
import {ProductButtons} from "./components/ProductButtons";

export default function Blog() {
    let {id} = useParams();

    const [product, setProductDetails] = useProductDetails(null);

    useEffect(() => {
        setProductDetails(id);
    }, []);


    const addToCart = () => {
        console.log('addToCart');
        console.log(product);
    }

    const addToWishlist = () => {
        console.log('addToCart');
        console.log(product);
    }


    function checkProductDetails() {
        const gridRows = product._source.ARTICLE_FEATURES[2].FEATURE
        if (Array.isArray(gridRows)) {
            return gridRows;
        }
        return [gridRows];
    }

    return (
        <Page title="Detalii produs">
            {product ?
                <Container>
                    <Card>

                        <Grid sx={{flexGrow: 1, m: 4}} container>
                            <Grid item xs={12} md={6}>
                                <ImageList data={product._source.MIME_INFO.MIME}/>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <ProductDetails
                                    data={product}/>
                                <Grid sx={{ml: 4}}>
                                    <ProductButtons
                                        onAddToCart={addToCart}
                                        onAddToWishlist={addToWishlist}
                                    />
                                </Grid>
                            </Grid>
                        </Grid>

                        <Grid sx={{m: 2}}>
                            <Grid>
                                <Typography variant="h4" gutterBottom>
                                    Descriere
                                </Typography>
                                <Typography variant="inherit" gutterBottom>
                                    {product._source.USER_DEFINED_EXTENSIONS.UDX_BULLETTEXT_1}
                                </Typography>
                                <Typography variant="inherit" gutterBottom>
                                    {product._source.ARTICLE_DETAILS.DESCRIPTION_LONG}
                                </Typography>
                            </Grid>

                            <Grid>
                                <Typography variant="h4" gutterBottom>
                                    Detalii produse
                                </Typography>
                                <BasicTable
                                    rows={checkProductDetails()}
                                />
                            </Grid>

                        </Grid>

                    </Card>
                </Container> : <></>}
        </Page>
    );
}
