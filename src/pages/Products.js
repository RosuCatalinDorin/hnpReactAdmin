import {useFormik} from 'formik';
import {useEffect, useState} from 'react';
// material
import {Container, Stack, Typography} from '@mui/material';
// components
import Page from '../components/Page';
import {
    ProductSort,
    ProductList,
    ProductCartWidget,
    ProductFilterSidebar,
} from '../sections/@dashboard/products';
// firebaseActions
import {getProducts, getTopProducts} from "../FireBase/actions";

import {getHnpElkProducts} from "../apiCalls/api/Products"
// ----------------------------------------------------------------------

export default function EcommerceShop()
{
    const [openFilter, setOpenFilter] = useState(false);
    const [products, setProducts] = useState([]);
    const [filters, setFilters] = useState({UDX_APPAREA: [], UDX_ITEMTYPE: [], FISRT_RELEAD:true});
    const formik = useFormik({
        initialValues: {
            gender: '',
            category: '',
            colors: '',
            priceRange: '',
            rating: '',
        },
        onSubmit: () =>
        {
            setOpenFilter(false);
        },
    });

    const {resetForm, handleSubmit} = formik;

    const handleOpenFilter = () =>
    {
        setOpenFilter(true);
    };

    const handleCloseFilter = () =>
    {
        setOpenFilter(false);
    };

    const handleResetFilter = () =>
    {
        handleSubmit();
        resetForm();
    };

    useEffect(async() =>
    {
        const data = await getHnpElkProducts();
        setProducts(data.data.hits.hits);

    }, []);

    useEffect(async() =>
    {
        debugger;
        if(filters.UDX_APPAREA.length > 0 || !filters.FISRT_RELEAD) {
            const data = await getHnpElkProducts(filters);
            setProducts(data.data.hits.hits);
        }

    }, [filters]);

    const setAllFilters = (item, key) =>
    {
        let currentFilters = JSON.parse(JSON.stringify(filters));
        currentFilters.FISRT_RELEAD = false;
        if(item.target.checked === true) {
            currentFilters[key].push(item.target.value);
        } else {
            currentFilters[key].splice(currentFilters[key].indexOf(item.target.value), 1);
        }
        setFilters(currentFilters);
    };
    return (
        <Page title="Dashboard: Products | Minimal-UI">
            <Container>
                <Typography variant="h4" sx={{mb: 5}}>
                    Products
                </Typography>

                <Stack
                    direction="row"
                    flexWrap="wrap-reverse"
                    alignItems="center"
                    justifyContent="flex-end"
                    sx={{mb: 5}}
                >
                    <Stack direction="row" spacing={1} flexShrink={0} sx={{my: 1}}>
                        <ProductFilterSidebar
                            formik={formik}
                            isOpenFilter={openFilter}
                            onResetFilter={handleResetFilter}
                            onOpenFilter={handleOpenFilter}
                            onCloseFilter={handleCloseFilter}
                            setFilters={setAllFilters}
                        />
                        <ProductSort/>
                    </Stack>
                </Stack>

                <ProductList products={products}/>
                <ProductCartWidget/>
            </Container>
        </Page>
    );
}
