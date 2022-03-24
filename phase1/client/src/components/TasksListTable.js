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
import { TablePagination, IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { esES } from "@material-ui/core/locale";
import axios from "axios";

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

class TasksListTable extends React.Component {
  state = {
    taskList: [],
  };
  componentDidMount() {
    this.getTasksList();
  }

  componentDidUpdate() {
    this.getTasksList();
  }

  getTasksList = () => {
    axios
      .get("http://localhost:4000/tasks")
      .then((response) => response.data)
      .then((response) => this.setState({ taskList: response }));
  };

  onDeleteClick = (taskId) => {
    axios.delete(`http://localhost:4000/deleteTask/${taskId}`);
    this.getTasksList();
  };
  // const [page, setPage] = React.useState(0);
  // const [rowsPerPage, setRowsPerPage] = React.useState(5);

  // const handleChangePage = (event, newPage) => {
  //   setPage(newPage);
  // };

  // const handleChangeRowsPerPage = (event) => {
  //   setRowsPerPage(parseInt(event.target.value, 10));
  //   setPage(0);
  // };

  // const emptyRows =
  //   rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);
  render() {
    return (
      <>
        <TableContainer
          component={Paper}
          style={{
            boxShadow: "2px 2px 15px rgba(0, 0, 0, 0.35)",
            width: "80%",
            marginLeft: "auto",
            marginRight: "auto",
            marginBottom: "10%",
          }}
        >
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead style={{ backgroundColor: "#006816" }}>
              <TableRow>
                <TableCell style={{ color: "white" }}>Is completed?</TableCell>
                <TableCell
                  className="boton"
                  style={{ color: "white" }}
                  align="center"
                >
                  Task Name
                </TableCell>
                <TableCell style={{ color: "white" }} align="center">
                  Options
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {this.state.taskList
                // .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((task) => (
                  <TableRow
                    // key={task.taskName}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      <Checkbox />
                      {/* {task.taskStatus} */}
                    </TableCell>
                    <TableCell align="center">{task.taskName}</TableCell>
                    <TableCell align="center">
                      <div>
                        <IconButton>
                          <EditIcon
                            fontSize="large"
                            style={{ color: "#006816" }}
                          />
                        </IconButton>
                        <IconButton>
                          <DeleteIcon
                            fontSize="large"
                            style={{ color: "#006816" }}
                            onClick={() => this.onDeleteClick(task.taskId)}
                          />
                        </IconButton>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              {/* {emptyRows > 0 && ( */}
              <TableRow>
                <TableCell colSpan={6} />
              </TableRow>
              {/* )} */}
            </TableBody>
          </Table>
        </TableContainer>
        {/* <ThemeProvider theme={theme}>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={rows.length}
          page={page}
          onPageChange={handleChangePage}
          rowsPerPage={rowsPerPage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </ThemeProvider> */}
      </>
    );
  }
}

export default TasksListTable;
