import {filter} from 'lodash';

import {useEffect, useState} from 'react';
// material
import {
    Button,
    Card,
    Checkbox,
    Container,
    Stack,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TablePagination,
    TableRow,
    Typography,
} from '@mui/material';
// components
import Page from '../../components/Page';
import Label from '../../components/Label';
import Scrollbar from '../../components/Scrollbar';
import Iconify from '../../components/Iconify';
import SearchNotFound from '../../components/SearchNotFound';
import {UserListHead, UserListToolbar, UserMoreMenu} from '../../sections/@dashboard/user';
import Modal from "../../components/Modal";
//
import Register from './form/Register';
import {getCollection} from "../../FireBase/actions";
import {parseDate} from "../../utils/utils";

// ----------------------------------------------------------------------

const TABLE_HEAD = [
    {id: 'name', label: 'Companie', alignRight: false},
    {id: 'reperezneetant', label: 'Reprezentant legal', alignRight: false},
    {id: 'telefon', label: 'Telefon', alignRight: false},
    {id: 'emailReprezentant', label: 'Email reprezentant', alignRight: false},
    {id: 'discount', label: 'Discount', alignRight: false},
    {id: 'consultantHnp', label: 'Consultant HNP', alignRight: false},
    {id: 'isVerified', label: 'Status', alignRight: false},
    {id: 'dateAdd', label: 'Data adaugare', alignRight: false},
    {id: 'addBy', label: 'Adaugat de', alignRight: false},
    {id: ''},
];

// ----------------------------------------------------------------------

function descendingComparator(a, b, orderBy) {
    if (b[orderBy] < a[orderBy]) {
        return -1;
    }
    if (b[orderBy] > a[orderBy]) {
        return 1;
    }
    return 0;
}

function getComparator(order, orderBy) {
    return order === 'desc'
        ? (a, b) => descendingComparator(a, b, orderBy)
        : (a, b) => -descendingComparator(a, b, orderBy);
}

function applySortFilter(array, comparator, query) {
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
        const order = comparator(a[0], b[0]);
        if (order !== 0) {
            return order;
        }
        return a[1] - b[1];
    });
    if (query) {
        return filter(array, (_user) => _user.name.toLowerCase().indexOf(query.toLowerCase()) !== -1);
    }
    return stabilizedThis.map((el) => el[0]);
}

export default function Partner() {
    const [page, setPage] = useState(0);
    const [order, setOrder] = useState('asc');
    const [selected, setSelected] = useState([]);
    const [orderBy, setOrderBy] = useState('name');
    const [filterName, setFilterName] = useState('');
    const [rowsPerPage, setRowsPerPage] = useState(5);
    //modal
    const [openModal, setOpenModal] = useState();
    const [loadData, setLoadData] = useState(1);
    //grid
    const [gridData, setGridData] = useState([]);

    const handleRequestSort = (event, property) => {
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
    };

    const handleSelectAllClick = (event) => {
        if (event.target.checked) {
            const newSelecteds = gridData.map((n) => n.name);
            setSelected(newSelecteds);
            return;
        }
        setSelected([]);
    };

    const handleClick = (event, name) => {
        const selectedIndex = selected.indexOf(name);
        let newSelected = [];
        if (selectedIndex === -1) {
            newSelected = newSelected.concat(selected, name);
        } else if (selectedIndex === 0) {
            newSelected = newSelected.concat(selected.slice(1));
        } else if (selectedIndex === selected.length - 1) {
            newSelected = newSelected.concat(selected.slice(0, -1));
        } else if (selectedIndex > 0) {
            newSelected = newSelected.concat(
                selected.slice(0, selectedIndex),
                selected.slice(selectedIndex + 1),
            );
        }
        setSelected(newSelected);
    };

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const handleFilterByName = (event) => {
        setFilterName(event.target.value);
    };

    const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - gridData.length) : 0;

    const filteredUsers = applySortFilter(gridData, getComparator(order, orderBy), filterName);

    const isUserNotFound = filteredUsers.length === 0;

    const getAllPartners = () => {
        getCollection("partners").then((data) => {
            setGridData(data);
        })
    }

    useEffect(() => {
        getAllPartners()
    }, [loadData]);

    useEffect(() => {
        if (loadData > 1) {
            getAllPartners()
        }

    }, []);


    return (
        <Page title="Parteneri | HNP">
            <Modal
                isOpen={openModal}
                setOpenModal={setOpenModal}
                title="Adauga partener"
                setLoadData={setLoadData}
                loadData={loadData}
            >
                <Register
                    setLoadData={setLoadData}
                    loadData={loadData}
                    isOpen={openModal}
                    setOpenModal={setOpenModal}
                />
            </Modal>
            <Container maxWidth="xl">
                <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
                    <Typography variant="h4" gutterBottom>
                        Parteneri HNP
                    </Typography>
                    <Button
                        variant="contained"
                        startIcon={<Iconify icon="eva:plus-fill"/>}
                        onClick={() => setOpenModal(true)}
                    >
                        Adauga Partener
                    </Button>
                </Stack>

                <Card>
                    <UserListToolbar
                        numSelected={selected.length}
                        filterName={filterName}
                        onFilterName={handleFilterByName}
                    />

                    <Scrollbar>
                        <TableContainer sx={{minWidth: 800}}>
                            <Table>
                                <UserListHead
                                    order={order}
                                    orderBy={orderBy}
                                    headLabel={TABLE_HEAD}
                                    rowCount={gridData.length}
                                    numSelected={selected.length}
                                    onRequestSort={handleRequestSort}
                                    onSelectAllClick={handleSelectAllClick}
                                />
                                <TableBody>
                                    {filteredUsers
                                        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                        .map((row) => {
                                            const {
                                                addBy,
                                                consultantEmail,
                                                consultantName,
                                                dateAdd,
                                                discount,
                                                email,
                                                id,
                                                name,
                                                phone,
                                                reprezentantLegal,
                                                status
                                            } = row;
                                            const isItemSelected = selected.indexOf(name) !== -1;

                                            return (
                                                <TableRow
                                                    hover
                                                    key={id}
                                                    tabIndex={-1}
                                                    role="checkbox"
                                                    selected={isItemSelected}
                                                    aria-checked={isItemSelected}
                                                >
                                                    <TableCell padding="checkbox">
                                                        <Checkbox
                                                            checked={isItemSelected}
                                                            onChange={(event) => handleClick(event, name)}
                                                        />
                                                    </TableCell>
                                                    <TableCell component="th" scope="row" padding="none">
                                                        <Stack direction="row" alignItems="center" spacing={2}>
                                                            {/*<Avatar alt={name} src={''}/>*/}
                                                            <Typography variant="subtitle2" noWrap>
                                                                {name}
                                                            </Typography>
                                                        </Stack>
                                                    </TableCell>
                                                    <TableCell align="left">{reprezentantLegal}</TableCell>
                                                    <TableCell align="left">{phone}</TableCell>
                                                    <TableCell align="left">{email}</TableCell>
                                                    <TableCell align="center">{discount + "%"}</TableCell>
                                                    <TableCell align="left">{consultantName}</TableCell>
                                                    <TableCell align="left">
                                                        <Label
                                                            variant="ghost"
                                                            color={(status === false && 'error') || 'success'}
                                                        >
                                                            {status === true ? "Activ" : "Inactiv"}
                                                        </Label>
                                                    </TableCell>
                                                    <TableCell align="center"
                                                               style={{minWidth: '120px'}}>{parseDate(dateAdd)}</TableCell>
                                                    <TableCell align="left">{addBy}</TableCell>
                                                    <TableCell align="right">
                                                        <UserMoreMenu/>
                                                    </TableCell>
                                                </TableRow>
                                            );
                                        })}
                                    {emptyRows > 0 && (
                                        <TableRow style={{height: 53 * emptyRows}}>
                                            <TableCell colSpan={6}/>
                                        </TableRow>
                                    )}
                                </TableBody>
                                {isUserNotFound && (
                                    <TableBody>
                                        <TableRow>
                                            <TableCell align="center" colSpan={6} sx={{py: 3}}>
                                                <SearchNotFound searchQuery={filterName}/>
                                            </TableCell>
                                        </TableRow>
                                    </TableBody>
                                )}
                            </Table>
                        </TableContainer>
                    </Scrollbar>

                    <TablePagination
                        rowsPerPageOptions={[5, 10, 25]}
                        component="div"
                        count={gridData.length}
                        rowsPerPage={rowsPerPage}
                        page={page}
                        onPageChange={handleChangePage}
                        onRowsPerPageChange={handleChangeRowsPerPage}
                    />
                </Card>
            </Container>
        </Page>
    );
}
