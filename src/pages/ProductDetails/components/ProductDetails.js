import * as React from 'react';

import Grid from '@mui/material/Grid';
import {Typography} from "@mui/material";


export default function ProductDetails(props) {
    const {data} = props;

    return (

        <Grid container spacing={2} sx={{m: 2}}>
            <Grid item xs={12} sm={12} md={12}>
                <Typography variant="h4" gutterBottom>
                    {data._source.DESCRIPTION_LONG}
                </Typography>
                <Typography variant="inherit" gutterBottom>
                    {data._source.MANUFACTURER_TYPE_DESCR}
                </Typography>
                <Typography variant="inherit">
                    Marca : {data._source.MANUFACTURER_NAME}
                </Typography>
                <Typography variant="inherit">
                    {data._source.DESCRIPTION_SHORT}
                </Typography>

                <Typography sx={{mt: 2}} variant="inherit" gutterBottom>
                    Cod produs (ISO): <b>{data._source.MANUFACTURER_AID}</b>
                </Typography>
                <Typography variant="inherit" gutterBottom>
                    Cod GTIN / Cod de bare: <b>{data._source.EAN}</b>
                </Typography>
                <Typography variant="inherit" gutterBottom>
                    <a href={data._source.MIMESOURCEDATASHEET} target="_blank" rel="noreferrer"> Data sheet</a>
                </Typography>
            </Grid>

        </Grid>

    );
}
