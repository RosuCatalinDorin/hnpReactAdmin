import React, {useEffect, useState} from "react";
import Page from '../../../components/Page';
import {Card, Container, Grid, Stack, Typography} from "@mui/material";
import {useParams} from "react-router-dom";
import {getDocumentById} from "../../../FireBase/actions";

export default function PostDetails() {

    const [product, setProduct] = useState({
        title: "",
        content: ''
    });

    let {id} = useParams();

    useEffect(async () => {
        id = id.split('-')[0];
        const productData = await getDocumentById('blog', id);
        //  productData.content = DOMPurify.sanitize(productData.content);
        setProduct(productData);

    }, [])

    return (
        <Page title="HNP: Noutati | Adaugare">
            <Container>
                <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
                    <Typography variant="h4" gutterBottom>
                        {product.title}
                    </Typography>

                </Stack>
                <Card
                    style={{minHeight: 340}}
                >
                    <Grid margin={1}>
                        <div dangerouslySetInnerHTML={{__html: product.content}}/>
                    </Grid>

                </Card>
            </Container>
        </Page>
    );
}