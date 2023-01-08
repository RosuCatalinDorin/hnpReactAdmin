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
                    <Card>

                        <Grid sx={{flexGrow: 1, m: 4}} container>
                            <Grid xs={12} md={6}>
                                <ImageList data={product._source.MIME_INFO.MIME}/>
                            </Grid>
                            <Grid xs={12} md={6}>
                                <ProductDetails
                                    data={product}/>
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
                                    rows={product._source.ARTICLE_FEATURES[2].FEATURE}
                                />
                            </Grid>

                        </Grid>

                    </Card>
                </Container> : <></>}
        </Page>
    );
}
