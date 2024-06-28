import PropTypes from 'prop-types';
import {Link as RouterLink, useNavigate} from 'react-router-dom';
// material
import {Box, Button, Card, IconButton, Link, Stack, Typography} from '@mui/material';
import {styled} from '@mui/material/styles';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

// utils
//
import Label from '../../../components/Label';
import {BASE_URL_IMAGES} from "../../../utils/utils";
import {fCurrency} from "../../../utils/formatNumber";
import {useDispatch, useSelector} from "react-redux";
import {addToCartRedux} from "../../../store/cart/cartAction";

// ----------------------------------------------------------------------

const ProductImgStyle = styled('img')({
    top: 0,
    width: '100%',
    aspectRatio: '3/2',
    objectFit: 'contain',
    position: 'relative'
});

// ----------------------------------------------------------------------

ShopProductCard.propTypes = {
    product: PropTypes.object
};

function getCardImage(product) {
   // let imagePath = product._source.MIME_INFO.MIME[0].MIME_SOURCE.split('/')
   // let imagePath = product._source.MIME_INFO.MIME[0].MIME_SOURCE.split('/')
    return product._source.MIMESOURCEDETAILFILE;
}


export default function ShopProductCard({product, id}) {
    const DESCRIPTION_SHORT = product._source.DESCRIPTION_SHORT;
    const cart = useSelector((state) => state.cart);
    const imagePath = getCardImage(product);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const status = 'sale'
    const priceSale = 22;
    return (
        <Card
            sx={{
                ':hover': {
                    boxShadow: 20,
                },
            }}>
            <Box sx={{height: 'auto', position: 'relative'}}>
                {status && (
                    <Label
                        variant="filled"
                        color={(status === 'sale' && 'error') || 'info'}
                        sx={{
                            zIndex: 9,
                            top: 16,
                            right: 16,
                            position: 'absolute',
                            textTransform: 'uppercase'
                        }}
                    >
                        {status}
                    </Label>
                )}
                <ProductImgStyle alt={DESCRIPTION_SHORT}
                                 src={BASE_URL_IMAGES + imagePath}/>
            </Box>

            <Stack spacing={2} sx={{p: 3}}>
                <Link to={'/detaliiProdus/' + DESCRIPTION_SHORT.replace('/', '-') + '/' + id} color="inherit"
                      underline="hover"
                      component={RouterLink}>
                    <Typography variant="subtitle2" noWrap>
                        {DESCRIPTION_SHORT}
                    </Typography>
                </Link>


                <Stack direction="row" alignItems="center" justifyContent="space-between">
                    <Typography variant="subtitle1">
                        <Typography
                            component="span"
                            variant="body1"
                            sx={{
                                color: 'text.disabled',
                                textDecoration: 'line-through'
                            }}
                        >
                            {priceSale && fCurrency(priceSale)}
                        </Typography>
                        &nbsp;
                        {fCurrency(22)}
                    </Typography>
                    <IconButton color="inherit" aria-label="add to shopping cart"
                                onClick={() => dispatch(addToCartRedux(product, cart))}>
                        <AddShoppingCartIcon/>
                    </IconButton>
                </Stack>
                <Button
                    onClick={() => {
                        navigate('/detaliiProdus/' + DESCRIPTION_SHORT.replace('/', '-') + '/' + id);
                    }}
                >Vezi detalii</Button>
            </Stack>

        </Card>
    );
}
