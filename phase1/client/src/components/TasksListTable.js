/* eslint-disable no-unused-vars */
import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Checkbox from "@mui/material/Checkbox";
import Paper from "@mui/material/Paper";
import { TablePagination } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { esES } from "@material-ui/core/locale";

function createData(taskName) {
  return { taskName };
}

const theme = createMuiTheme(esES);

const rows = [
  createData("Buy groceries", "Shopping"),
  createData("Prepare weekly report", "Work"),
  createData("Write the candidates", "Work"),
  createData("Do laundry", "Home"),
  createData("Go to gym", "Personal"),
  createData("Buy groceries", "Shopping"),
  createData("Prepare weekly report", "Work"),
  createData("Write the candidates", "Work"),
  createData("Dssss", "Home"),
  createData("Go to gym", "Personal"),
];

const TasksListTable = () => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const emptyRows =
    rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

  return (
    <>
      <TableContainer
        component={Paper}
        style={{ boxShadow: "2px 2px 15px rgba(0, 0, 0, 0.35)" }}
      >
        <Table sx={{ minWidth: 650 }}>
          <TableHead style={{ backgroundColor: "#006816" }}>
            <TableRow>
              <TableCell style={{ color: "white" }}>Task name</TableCell>
              <TableCell
                className="boton"
                style={{ color: "white" }}
                align="center"
              >
                Is completed?
              </TableCell>
              <TableCell style={{ color: "white" }} align="center">
                Options
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => (
                <TableRow
                  key={row.taskName}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.taskName}
                  </TableCell>
                  <TableCell align="center">
                    <Checkbox />
                  </TableCell>
                  <TableCell align="center">
                    <div style={{ color: "#006816" }}>
                      <EditIcon fontSize="large" />
                      <DeleteIcon fontSize="large" />
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            {emptyRows > 0 && (
              <TableRow style={{ height: 53 * emptyRows }}>
                <TableCell colSpan={6} />
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
      <ThemeProvider theme={theme}>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={rows.length}
          page={page}
          onPageChange={handleChangePage}
          rowsPerPage={rowsPerPage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </ThemeProvider>
    </>
  );
};

export default TasksListTable;
