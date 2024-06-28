import {useFormik} from 'formik';
import * as React from 'react';
import {useEffect, useState} from 'react';
// material
import {Box, Container, Grid} from '@mui/material';
// components
import Page from '../components/Page';
import {ProductFilterSidebar, ProductList,} from '../sections/@dashboard/products';
// firebaseActions
import {getHnpElkProducts} from "../apiCalls/api/Products"
import Pagination from "../components/Pagination";
import SearchInput from "../components/SearchInput";
import NotificationInfo from "../components/NotificationInfo";
import {getProductsPrice} from "../FireBase/actions";
import {useAuth} from "../Auth";
import FormFilters from "../sections/@dashboard/products/FormFilters";
import useMediaQuery from "@mui/material/useMediaQuery";

const INDEX_PRODUCTS = 'elk-excel-index';
const ROWS_PER_PAGE = 8;
// ----------------------------------------------------------------------

const initialFiltersState = {UDX_APPAREA: [], UDX_ITEMTYPE: [], FISRT_RELEAD: true};

export default function EcommerceShop() {
    const [openFilter, setOpenFilter] = useState(false);
    const [products, setProducts] = useState([]);
    const [filters, setFilters] = useState(initialFiltersState);
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
    const [searchText, setSearchText] = useState(null);
    const matches = useMediaQuery('(min-width:900px)');

    const {currentUser} = useAuth();
    // and page state


    useEffect(async () => {
        await getProducts(null)

    }, []);

    useEffect(async () => {
        if (filters.UDX_APPAREA.length > 0 || !filters.FISRT_RELEAD) {
            await getProducts(filters, INDEX_PRODUCTS, from, searchText)
        } else {
            await getProducts(null, INDEX_PRODUCTS, from, searchText)
        }

    }, [filters, page, searchText]);
    const handleOpenFilter = () => {

        setOpenFilter(true);
    };
    const handleCloseFilter = () => {

        setOpenFilter(false);
    };
    const handleResetFilter = () => {
        handleSubmit();
        resetForm();
        setFilters(initialFiltersState)
    };
    const addProductPrice = async (data) => {

        let products = data.data.hits.hits;
        let productIds = []

        if (currentUser.login === false) {
            return products;
        }
        if (products.length === 0) {
            return []
        }

        products.map((row) => {
            productIds.push(row._source.SUPPLIER_ALT_AID)
        })

        const productsPrice = await getProductsPrice(productIds);

        products.map((product) => {
        debugger;
            const price = productsPrice.filter(proce => proce.SUPPLIER_ALT_AID_2 === product._source.SUPPLIER_ALT_AID)
            if (price.length > 0) {
                product._source.PRICE = price[0].PRICE
            }else {
                product._source.PRICE = null;

            }

        })

        return products

    }
    const getProducts = async (query, index, fromTo, search) => {
        const data = await getHnpElkProducts(query, index, fromTo, ROWS_PER_PAGE, search);

        const products = await addProductPrice(data)

        setProducts(products);
        setTotalRows(data.data.hits.total.value);

    }

    const setAllFilters = (item, key) => {
        let currentFilters = JSON.parse(JSON.stringify(filters));
        currentFilters.FISRT_RELEAD = false;

        if (key === 'UDX_APPAREA') {
            currentFilters[key] = [item.target.value]
            setFilters(currentFilters);
            return
        }
        if (item.target.checked === true) {
            currentFilters[key].push(item.target.value);
        } else {
            currentFilters[key].splice(currentFilters[key].indexOf(item.target.value), 1);
        }
    };

    return (
        <Page title="HNP: Products">
            <Container maxWidth="xl">
                <NotificationInfo
                    showDefaultMessage={true}
                />
                <Grid sx={{flexGrow: 1}} spacing={2} container>
                    <Grid item xs={12} md={2}>
                        <SearchInput
                            onSearch={(value) => {
                                setSearchText(value)
                                setPage(1);
                            }}
                        />
                        {!matches ? <ProductFilterSidebar
                            formik={formik}
                            isOpenFilter={openFilter}
                            onResetFilter={handleResetFilter}
                            onOpenFilter={handleOpenFilter}
                            onCloseFilter={handleCloseFilter}
                            setFilters={setAllFilters}
                        /> : ""}

                    </Grid>
                    <Grid item xs={12} md={10}>

                    </Grid>
                </Grid>


                <Grid sx={{flexGrow: 1}} spacing={2} container>
                    <Grid item xs={12} md={2}>
                        <Box>
                            {matches ?
                                <FormFilters
                                    onResetFilter={handleResetFilter}
                                    isOpenFilter={handleOpenFilter}
                                    onCloseFilter={handleCloseFilter}
                                    setFilters={setAllFilters}
                                    formik={formik}
                                    mobile={false}
                                />
                                : ""}

                        </Box>


                    </Grid>
                    <Grid item xs={12} md={10}>
                        <ProductList products={products}/>
                    </Grid>
                </Grid>

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
