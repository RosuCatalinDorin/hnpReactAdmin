import {useFormik} from 'formik';
import {useEffect, useState} from 'react';
// material
import {Container, Stack, Typography} from '@mui/material';
// components
import Page from '../components/Page';
import {ProductCartWidget, ProductFilterSidebar, ProductList, ProductSort,} from '../sections/@dashboard/products';
// firebaseActions
import {getHnpElkProducts} from "../apiCalls/api/Products"
import Pagination from "../components/Pagination";

const INDEX_PRODUCTS = 'hnp-store-article';
const ROWS_PER_PAGE = 12;
// ----------------------------------------------------------------------

export default function EcommerceShop() {
    const [openFilter, setOpenFilter] = useState(false);
    const [products, setProducts] = useState([]);
    const [filters, setFilters] = useState({UDX_APPAREA: [], UDX_ITEMTYPE: [], FISRT_RELEAD: true});
    const formik = useFormik({
        initialValues: {
            gender: '',
            category: '',
            colors: '',
            priceRange: '',
            rating: '',
        },
        onSubmit: () => {
            setOpenFilter(false);
        },
    });
    const {resetForm, handleSubmit} = formik;
    //page state
    const [page, setPage] = useState(1);
    const [from, setFromProduct] = useState(0);
    const [totalRows, setTotalRows] = useState(0);
    // and page state

    useEffect(async () => {
        await getProducts(null)

    }, []);

    useEffect(async () => {
        if (filters.UDX_APPAREA.length > 0 || !filters.FISRT_RELEAD) {
            await getProducts(filters, INDEX_PRODUCTS, from)
        } else {
            await getProducts(null, INDEX_PRODUCTS, from)
        }

    }, [filters, page]);
    const handleOpenFilter = () => {

        setOpenFilter(true);
    };
    const handleCloseFilter = () => {

        setOpenFilter(false);
    };
    const handleResetFilter = () => {
        handleSubmit();


        resetForm();
    };
    const getProducts = async (query, index, fromTo) => {
        const data = await getHnpElkProducts(query, index, fromTo, ROWS_PER_PAGE);
        setProducts(data.data.hits.hits);
        setTotalRows(data.data.hits.total.value);

    }

    const setAllFilters = (item, key) => {
        let currentFilters = JSON.parse(JSON.stringify(filters));
        currentFilters.FISRT_RELEAD = false;
        if (item.target.checked === true) {
            currentFilters[key].push(item.target.value);
        } else {
            currentFilters[key].splice(currentFilters[key].indexOf(item.target.value), 1);
        }
        setFilters(currentFilters);
    };
    return (
        <Page title="HNP: Products">
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
                <Pagination
                    totalRows={totalRows}
                    page={page}
                    totalRowsPerPage={ROWS_PER_PAGE}
                    handleChange={(from, newPage) => {
                        setPage(newPage);
                        setFromProduct(from);
                    }}
                />
            </Container>
        </Page>
    );
}
