import {Button} from "@mui/material";
import Iconify from "../../../components/Iconify";
import * as React from "react";

export const ProductButtons = (props) => {
    const {onAddToCart, onAddToWishlist} = props;
    return (
        <>
            <Button
                sx={{
                    width: '80%',
                    height: 50,
                }}
                variant="contained"
                onClick={onAddToCart}
                startIcon={<Iconify icon="material-symbols:add-shopping-cart"/>}
            >Adauga in cos</Button>
            <Button
                sx={{
                    width: '80%',
                    height: 50,
                    mt: 2,
                }
                }
                variant="outlined"
                onClick={onAddToWishlist}
                startIcon={<Iconify icon="icon-park-outline:love-and-help"/>}
            >Adauga la favorite</Button>
        </>
    );
}