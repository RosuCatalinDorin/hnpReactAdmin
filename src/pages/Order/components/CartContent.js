import {
    Avatar,
    Box,
    Button,
    ButtonGroup,
    Card,
    Grid,
    ListItem,
    ListItemAvatar,
    ListItemText,
    Typography
} from "@mui/material";
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import Iconify from "../../../components/Iconify";

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import * as React from "react";
import {fCurrency} from "../../../utils/formatNumber";

export default function CartContent(props) {

    const {cart, handleAddToCart, handleRemoveQuantity, handleRemoveProduct} = props

    return (
        <Card>
            <Grid container>
                <Grid item xs={12} sx={{mt: 4, ml: 4}}>
                    <Typography variant="h4" sx={{mb: 5, display: 'flex'}}>
                        Cosul tau <Typography
                        sx={{mt: 0.9, ml: 1}}> ( {cart.length} produse ) </Typography>
                    </Typography>
                </Grid>
            </Grid>
            <TableContainer component={Paper}>
                <Table sx={{minWidth: 970}} aria-label="simple table">
                    <TableHead sx={{backgroundColor: "rgb(244,246,248)"}} style={{borderRadius: '0'}}>
                        <TableRow>
                            <TableCell>Produs</TableCell>
                            <TableCell align="center">Pret</TableCell>
                            <TableCell align="left">Cantitate</TableCell>
                            <TableCell align="center">Pret Total</TableCell>
                            <TableCell align="right"></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {cart.map((row) => (
                            <TableRow
                                key={row.name}
                                sx={{'&:last-child td, &:last-child th': {border: 0}}}
                            >
                                <TableCell component="th" scope="row">
                                    <ListItem
                                        disableGutters
                                        sx={{
                                            py: 1.5,
                                            px: 2.5,
                                            mt: '1px',
                                        }}
                                    >
                                        <ListItemAvatar>
                                            <Avatar sx={{bgcolor: 'background.neutral', height: 60, width: 60}}>
                                                <img alt={row._source.ARTICLE_DETAILS.DESCRIPTION_SHORT}
                                                     src={process.env.PUBLIC_URL + '/static/hnp-catalog' + row._source.MIME_INFO.MIME[0].MIME_SOURCE}/>
                                            </Avatar>
                                        </ListItemAvatar>
                                        <ListItemText
                                            primary={row._source.ARTICLE_DETAILS.DESCRIPTION_SHORT}
                                        />
                                    </ListItem>
                                </TableCell>
                                <TableCell align="right">
                                    <Typography variant="subtitle2" sx={{color: 'text.secondary',}}>
                                        {fCurrency(40.99)}
                                    </Typography>

                                </TableCell>
                                <TableCell align="right">
                                    <Box>
                                        <ButtonGroup sx={{mr: 2}} variant="outlined"
                                                     aria-label="outlined primary button group">
                                            <Button
                                                onClick={() => handleRemoveQuantity(row)}
                                            >-</Button>
                                            <Button
                                                onClick={() => handleAddToCart(row)}
                                            >+</Button>
                                        </ButtonGroup>
                                        <Iconify icon="fluent-mdl2:quantity" sx={{mr: 0.5, width: 16, height: 16}}/>
                                        <b>{row.quantity + " x "}</b>
                                    </Box>
                                </TableCell>
                                <TableCell align="right">
                                    <Typography variant="subtitle2" sx={{color: 'text.secondary'}}>
                                        {fCurrency(40.99 * row.quantity)}
                                    </Typography>
                                </TableCell>
                                <TableCell align="right">
                                    <IconButton aria-label="delete" size="medium"
                                                onClick={() => handleRemoveProduct(row)}>
                                        <DeleteIcon fontSize="inherit"/>
                                    </IconButton>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Card>
    );
}