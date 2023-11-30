import React, { useEffect, useState } from "react";
import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { viewTransaction } from "../../../api/projectApi";
import "../Profile.css";

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
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function createData(UserName, UserEmail, ProjectName, NumTrees, Amount) {
  console.log(UserName, UserEmail, ProjectName, NumTrees, Amount);
  return { UserName, UserEmail, ProjectName, NumTrees, Amount };
}

const UserTransaction = ({ props }) => {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await viewTransaction();
        console.log(response);
        const transactionRows = response.data
          .filter(
            (transaction) => transaction.user == sessionStorage.getItem("id")
          )
          .map((transaction) =>
            createData(
              transaction.name,
              transaction.email,
              transaction.project_name,
              transaction.trees_count,
              transaction.amount,
              "Actions"
            )
          );
        setRows(transactionRows); // Set the state once with the updated data
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="transactionPage">
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="center">Doner Name</StyledTableCell>
              <StyledTableCell align="center">Doner Email</StyledTableCell>
              {props != "owner" && (
                <StyledTableCell align="center">Project Name</StyledTableCell>
              )}
              <StyledTableCell align="center">Number of trees</StyledTableCell>
              <StyledTableCell align="center">Amount(in Rs)</StyledTableCell>
              <StyledTableCell align="center">Actions</StyledTableCell>
              {/* <StyledTableCell align="right">Carbs&nbsp;(g)</StyledTableCell>
                            <StyledTableCell align="right">Protein&nbsp;(g)</StyledTableCell> */}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <StyledTableRow key={row.name}>
                <StyledTableCell component="th" scope="row" align="center">
                  {row.UserName}
                </StyledTableCell>
                <StyledTableCell component="th" scope="row" align="center">
                  {row.UserEmail}
                </StyledTableCell>
                {props != "owner" && (
                  <StyledTableCell align="center">
                    {row.ProjectName}
                  </StyledTableCell>
                )}
                <StyledTableCell align="center">{row.NumTrees}</StyledTableCell>
                <StyledTableCell align="center">{row.Amount}</StyledTableCell>
                {/* <StyledTableCell align="right">{row.carbs}</StyledTableCell> */}
                {/* <StyledTableCell align="right">{row.protein}</StyledTableCell> */}
                <Button variant="contained" className="filledBtn" sx={{ m: 2 }}>
                  User Report
                </Button>
                <Button variant="contained" className="filledBtn">
                  Project Report
                </Button>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default UserTransaction;
