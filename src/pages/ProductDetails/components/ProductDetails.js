import * as React from 'react';

import Grid from '@mui/material/Grid';
import {Typography} from "@mui/material";


export default function ProductDetails(props) {
    const {data} = props;
    const dataSheetLink = data._source.MIME_INFO.MIME.filter((item) => {
        return item.MIME_PURPOSE === 'data_sheet';
    })[0].MIME_SOURCE;
    debugger;
    console.log(JSON.stringify(data));
    return (

        <Grid container spacing={2} sx={{m: 2}}>
            <Grid item xs={12} sm={12} md={12}>
                <Typography variant="h4" gutterBottom>
                    {data._source.ARTICLE_DETAILS.MANUFACTURER_AID}
                </Typography>
                <Typography variant="inherit" gutterBottom>
                    {data._source.ARTICLE_DETAILS.MANUFACTURER_TYPE_DESCR}
                </Typography>
                <Typography variant="inherit">
                    Marca : {data._source.ARTICLE_DETAILS.MANUFACTURER_NAME}
                </Typography>
                <Typography variant="inherit">
                    {data._source.ARTICLE_DETAILS.DESCRIPTION_SHORT}
                </Typography>

                <Typography sx={{mt: 2}} variant="inherit" gutterBottom>
                    Cod produs (ISO): <b>{data._source.ARTICLE_DETAILS.MANUFACTURER_AID}</b>
                </Typography>
                <Typography variant="inherit" gutterBottom>
                    Cod GTIN / Cod de bare: <b>{data._source.ARTICLE_DETAILS.EAN}</b>
                </Typography>
                <Typography variant="inherit" gutterBottom>
                    Data sheet: <a href={dataSheetLink} target="_blank" rel="noreferrer">Vezi mai multe detalii</a>
                </Typography>
            </Grid>

        </Grid>

    );
}
