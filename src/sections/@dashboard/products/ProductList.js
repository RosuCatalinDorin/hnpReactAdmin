import PropTypes from 'prop-types';
// material
import {Grid} from '@mui/material';
import ShopProductCard from './ProductCard';

// ----------------------------------------------------------------------

ProductList.propTypes = {
    products: PropTypes.array.isRequired
};

export default function ProductList({products, ...other}) {
    return (
        <Grid container spacing={3} {...other}>
            {products.map((product, key) => (
                <Grid key={key} item xs={12} sm={6} md={2}>
                    <ShopProductCard product={product} id={product._id}/>
                </Grid>
            ))}

        </Grid>
    );
}
