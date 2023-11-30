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
import '../Profile.css';

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
      <TableContainer component={Paper} 
      sx={{ 
        width: { xs:'100%', md: '95%', lg: '90%' } 
        }}>
        <Table aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="center">Doner Name</StyledTableCell>
              <StyledTableCell align="center">Doner Email</StyledTableCell>
              {props != "owner" && (
                <StyledTableCell align="center">Project Name</StyledTableCell>
              )}
              <StyledTableCell align="center">
                Number of trees
              </StyledTableCell>
              <StyledTableCell align="center">Amount(in Rs)</StyledTableCell>
              <StyledTableCell align="center">Actions</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <StyledTableRow key={row.ProjectName}>
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
                <StyledTableCell align="center">
                  {row.NumTrees}
                </StyledTableCell>
                <StyledTableCell align="center">{row.Amount}</StyledTableCell>
                <StyledTableCell align="center">
                  <Button
                    variant="contained"
                    className="filledBtn tableBtn"
                    sx={{ mx: 2 }}
                  >
                    User Report
                  </Button>
                  {props != "owner" && (
                    <Button variant="contained" className="filledBtn tableBtn" sx={{mt:{xs:1,lg:0}}}>
                      Project Report
                    </Button>
                  )}
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
  );
};

export default UserTransaction;
