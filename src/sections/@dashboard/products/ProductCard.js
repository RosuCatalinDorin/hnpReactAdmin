import PropTypes from 'prop-types';
import {Link as RouterLink, useNavigate} from 'react-router-dom';
// material
import {Box, Button, Card, Link, Stack, Typography} from '@mui/material';
import {styled} from '@mui/material/styles';
// utils
//
import Label from '../../../components/Label';
import {BASE_URL_IMAGES} from "../../../utils/utils";

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
    let imagePath = product._source.MIME_INFO.MIME[0].MIME_SOURCE.split('/')
    return imagePath[imagePath.length - 1];
}

export default function ShopProductCard({product, id}) {
    const DESCRIPTION_SHORT = product._source.ARTICLE_DETAILS.DESCRIPTION_SHORT;
    const imagePath = getCardImage(product);
    const navigate = useNavigate();
    const status = 'sale'
    const priceSale = 22;
    return (
        <Card>
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
                {/*//  src={process.env.PUBLIC_URL + "/static/hnp-catalog" + imagePath}/>*/}
            </Box>

            <Stack spacing={2} sx={{p: 3}}>
                <Link to={'/detaliiProdus/' + DESCRIPTION_SHORT.replace('/', '-') + '/' + id} color="inherit"
                      underline="hover"
                      component={RouterLink}>
                    <Typography variant="subtitle2" noWrap>
                        {DESCRIPTION_SHORT}
                    </Typography>
                </Link>

                {/*
                 //todo pretul este comentat pentru ca nu exista pret pe prduse in catalogul hnp
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
                </Stack>*/}
                <Button
                    onClick={() => {
                        navigate('/detaliiProdus/' + DESCRIPTION_SHORT.replace('/', '-') + '/' + id);
                    }}
                >Vezi detalii</Button>
            </Stack>

        </Card>
    );
}
