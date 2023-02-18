import {useFormik} from 'formik';
import * as React from 'react';
import {useEffect, useState} from 'react';
// material
import {Container, Grid} from '@mui/material';
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

const INDEX_PRODUCTS = 'hnp-store-article';
const ROWS_PER_PAGE = 10;
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
    const [searchText, setSearchText] = useState(null);
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
            productIds.push(row._source.ARTICLE_DETAILS.SUPPLIER_ALT_AID)
        })

        const productsPrice = await getProductsPrice(productIds);
        products.map((product) => {
            const price = productsPrice.filter(proce => proce.SUPPLIER_ALT_AID_2 === product._source.ARTICLE_DETAILS.SUPPLIER_ALT_AID)[0].PRICE
            product._source.ARTICLE_DETAILS.PRICE = price;

        })

        return products

    }
    const getProducts = async (query, index, fromTo, search) => {
        const data = await getHnpElkProducts(query, index, fromTo, ROWS_PER_PAGE, search);

        const products = await addProductPrice(data)
        /*        if (currentUser.login) {

                }
                data.data.hits.hits.map((row) => {
                    productIds.push(row._source.ARTICLE_DETAILS.SUPPLIER_ALT_AID)
                })

                if (productIds.length > 0) {
                    const productsPrice = await getProductsPrice(productIds);
                    products.map((porduct) => {

                        const price = productsPrice.filter(proce => proce.SUPPLIER_ALT_AID_2 === porduct._source.ARTICLE_DETAILS.SUPPLIER_ALT_AID)[0].PRICE
                        porduct._source.ARTICLE_DETAILS.PRICE = price;

                    })
                }*/
        setProducts(products);
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
            <Container maxWidth="xl">
                <NotificationInfo/>

                <Grid sx={{flexGrow: 1}} spacing={2} container>
                    <Grid item xs={12} md={2}>
                        <SearchInput
                            onSearch={(value) => {
                                setSearchText(value)
                                setPage(1);
                            }}
                        />
                        <ProductFilterSidebar
                            formik={formik}
                            isOpenFilter={openFilter}
                            onResetFilter={handleResetFilter}
                            onOpenFilter={handleOpenFilter}
                            onCloseFilter={handleCloseFilter}
                            setFilters={setAllFilters}
                        />

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
