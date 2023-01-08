import * as React from 'react';
import {styled} from '@mui/material/styles';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

const Demo = styled('div')(({theme}) => ({
    backgroundColor: theme.palette.background.paper,
}));

export default function ProductDetails(props) {
    const {data} = props;
    const listArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16,
        17, 18, 19, 20, 21, 22, 23, 24, 25, 26,
        27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55];

    return (
        <Box sx={{flexGrow: 1, maxWidth: 752}}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <Typography sx={{mt: 4, mb: 2}} variant="h6" component="div">
                        Detalii produs
                    </Typography>
                    <Demo>
                        <List dense={true}>
                            {listArray.map((item, key) => (
                                data['FT_DESCR_DIN_' + item] ?
                                    <ListItem key={key}>
                                        <ListItemText
                                            primary={data['FT_DESCR_DIN_' + item] + ' : ' + data['FT_VALUE_DIN_' + item] + ' ' + (data['FT_UNIT_DIN' + item] ? data['FT_UNIT_DIN' + item] : "")}
                                        />
                                    </ListItem> : ''
                            ))}
                        </List>
                    </Demo>
                </Grid>
            </Grid>
        </Box>
    );
}
