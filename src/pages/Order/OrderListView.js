import {Box, Card, Typography} from "@mui/material";
import {GridColDef, GridValueGetterParams} from "@mui/x-data-grid";
import DataGrid from "../../components/AppDataGrid";
import {useEffect, useState} from "react";
import {getCollection} from "../../FireBase/actions";
import {parseDate} from "../../utils/utils";
import {fCurrency} from "../../utils/formatNumber";
import {useNavigate} from "react-router-dom";

const rows = [
    {id: 1, lastName: 'Snow', firstName: 'Jon', age: 35},
    {id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42},
    {id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45},
    {id: 4, lastName: 'Stark', firstName: 'Arya', age: 16},
    {id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null},
    {id: 6, lastName: 'Melisandre', firstName: null, age: 150},
    {id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44},
    {id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36},
    {id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65},
];
const columns: GridColDef[] = [
    {field: 'id', headerName: 'ID', width: 190},
    {
        field: 'dateAdd',
        headerName: 'Data',
        type: 'date',
        width: 280,
        valueGetter: (params: GridValueGetterParams) => {
            return parseDate(params.row.dateAdd)
        }
    },

    {
        field: 'statusDescription',
        headerName: 'Stare',
        type: "boolean",
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
        width: 210,
        valueGetter: (params: GridValueGetterParams) =>
            `${params.row.user.companyName || ''}`
    },
    {
        field: 'totalCost',
        headerName: 'Pret comanda',
        type: "number",
        width: 100,
        valueGetter: (params: GridValueGetterParams) => fCurrency(params.row.totalCost)
    }

];
export default function OrderListView() {

    const [orders, setOrders] = useState([]);
    const navigate = useNavigate();
    useEffect(async () => {
        const order = await getCollection('orders');
        setOrders(order);
    }, [])

    return (
        <Card sx={{width: '100%'}}>
            <Typography sx={{m: 2}} variant="inherit" gutterBottom>
                Comenzi HNP </Typography>
            <Box sx={{height: 450, width: '100%', p: 2}}>
                <DataGrid
                    onRowDoubleClick={(row) => {
                        navigate(`/dashboard/orderDetails/${row.row.id}`)
                    }}
                    rows={orders}
                    columns={columns}
                    pageSize={5}
                    rowsPerPageOptions={[5]}
                    disableSelectionOnClick
                    experimentalFeatures={{newEditingApi: true}}
                />

            </Box>
        </Card>

    );
}