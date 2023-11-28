import React from 'react';
import { Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}

const UserTransaction = () => {

    const rows = [
        createData('Rs.1000/-', 'Project name', 150,"Actions"),
        createData('Rs.1000/-', 'Project name', 150,"Actions"),
        createData('Rs.1000/-', 'Project name', 150,"Actions"),
        createData('Rs.1000/-', 'Project name', 150,"Actions"),
        createData('Rs.1000/-', 'Project name', 150,"Actions"),
        createData('Rs.1000/-', 'Project name', 150,"Actions"),
    ];

    return (
        <div>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell align="center">Amount(in Rs)</StyledTableCell>
                            <StyledTableCell align="center">Project Name</StyledTableCell>
                            <StyledTableCell align="center">Number of trees</StyledTableCell>
                            <StyledTableCell align="center">Actions</StyledTableCell>
                            {/* <StyledTableCell align="right">Carbs&nbsp;(g)</StyledTableCell>
                            <StyledTableCell align="right">Protein&nbsp;(g)</StyledTableCell> */}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <StyledTableRow key={row.name}>
                                <StyledTableCell component="th" scope="row" align="center">
                                    {row.name}
                                </StyledTableCell>
                                <StyledTableCell align="center">{row.calories}</StyledTableCell>
                                <StyledTableCell align="center">{row.fat}</StyledTableCell>
                                {/* <StyledTableCell align="right">{row.carbs}</StyledTableCell> */}
                                {/* <StyledTableCell align="right">{row.protein}</StyledTableCell> */}
                                <Button variant="contained" className="filledBtn" sx={{m:2}}>User Report</Button>
                                <Button variant="contained" className="filledBtn">Project Report</Button>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}

export default UserTransaction