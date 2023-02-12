import {Box, Card, Typography} from "@mui/material";
import {GridColDef, GridValueGetterParams} from "@mui/x-data-grid";
import DataGrid from "../../components/AppDataGrid";
import {useEffect, useState} from "react";
import {getCollection, getCollectionByUser} from "../../FireBase/actions";
import {parseDate} from "../../utils/utils";
import {fCurrency} from "../../utils/formatNumber";
import {useNavigate} from "react-router-dom";
import {useAuth} from "../../Auth";


const columns: GridColDef[] = [
    {field: 'id', headerName: 'ID', width: 190},
    {
        field: 'dateAdd',
        headerName: 'Data',
        type: 'date',
        width: 210,
        valueGetter: (params: GridValueGetterParams) => {
            return parseDate(params.row.dateAdd)
        }
    },

    {
        field: 'statusDescription',
        headerName: 'Stare',
        width: 150,
        editable: false
    },
    {
        field: 'firstName',
        headerName: 'Nume Client',
        width: 210,
        valueGetter: (params: GridValueGetterParams) =>
            `${params.row.user.firstName || ''} ${params.row.user.lastName || ''}`
    },
    {
        field: 'companyName',
        headerName: 'Partener',
        width: 100,
        valueGetter: (params: GridValueGetterParams) =>
            `${params.row.user.companyName || ''}`
    },
    {
        field: 'totalCost',
        headerName: 'TOTAL',
        type: "number",
        width: 100,
        valueGetter: (params: GridValueGetterParams) => fCurrency(params.row.totalCost)
    }

];
export default function OrderListView(props) {

    const {user = false, title} = props;
    const [orders, setOrders] = useState([]);
    const {currentUser} = useAuth();
    const navigate = useNavigate();
    useEffect(async () => {
        if (!user) {
            const order = await getCollection('orders');
            setOrders(order);
        } else {
            const order = await getCollectionByUser('orders', currentUser.uid)
            setOrders(order);
        }

    }, [])

    return (
        <Card sx={{width: '100%'}}>
            <Typography sx={{m: 2}} variant="inherit" gutterBottom>
                {title} </Typography>
            <Box sx={{height: 455, width: '100%', p: 2}}>
                <DataGrid
                    onRowDoubleClick={(row) => {
                        navigate(`/dashboard/orderDetails/${row.row.id}`)
                    }}
                    rows={orders}
                    columns={columns}
                    pageSize={6}
                    rowsPerPageOptions={[5]}
                    disableSelectionOnClick
                    experimentalFeatures={{newEditingApi: true}}
                />

            </Box>
        </Card>

    );
}