import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


export default function BasicTable(props) {
    const {rows} = props;
    return (
        <TableContainer component={Paper}>
            <Table sx={{minWidth: 650}} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Descriere </TableCell>
                        <TableCell align="right">Simbol &nbsp;</TableCell>
                        <TableCell align="right">Valoare&nbsp;</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row, key) => (
                        <TableRow
                            key={key}
                            sx={{
                                '&:last-child td, &:last-child th': {border: 0},
                                backgroundColor: key % 2 === 0 ? 'white' : '#8080800d'
                            }}>

                            <TableCell component="th" scope="row">
                                {row.FDESCR}
                            </TableCell>
                            <TableCell align="right">{row.FNAME}</TableCell>
                            <TableCell align="right">{row.FVALUE + " " + (row.FUNIT ? row.FUNIT : "")}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
