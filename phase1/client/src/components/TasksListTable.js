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
import { IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import axios from "axios";
import TasksEditInput from "./TasksEditInput";

class TasksListTable extends React.Component {
  state = {
    taskList: [],
    show: false,
    idnumber: 0,
  };

  showEditField = (taskId) => {
    this.setState({ show: true, idnumber: taskId });
  };

  isChecked = (taskId) => {
    const index = this.state.taskList.findIndex((id) => taskId === id.taskId);
    let modTask = this.state.taskList;
    modTask[index].taskStatus = !modTask[index].taskStatus;
    this.setState({ ...this.state, taskList: modTask });
    axios.put(`http://localhost:4000/completeTask/${taskId}`, {
      completed: this.state.taskList[index].taskStatus,
    });
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

  render() {
    return (
      <>
        {this.state.show && (
          <TasksEditInput
            taskId={this.state.idnumber}
            estado={this.state}
            taskList={this.getTasksList()}
          />
        )}

        <TableContainer
          component={Paper}
          style={{
            boxShadow: "2px 2px 15px rgba(0, 0, 0, 0.35)",
            width: "80%",
            marginLeft: "auto",
            marginRight: "auto",
            marginTop: "2%",
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
              {this.state.taskList.map((task) => (
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    <Checkbox
                      checked={task.taskStatus}
                      onClick={() => this.isChecked(task.taskId)}
                      style={{ color: "#006816" }}
                    />
                  </TableCell>
                  <TableCell align="center">{task.taskName}</TableCell>
                  <TableCell align="center">
                    <div>
                      <IconButton>
                        <EditIcon
                          fontSize="large"
                          style={{ color: "#006816" }}
                          onClick={() => this.showEditField(task.taskId)}
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
              <TableRow>
                <TableCell colSpan={6} />
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </>
    );
  }
}

export default TasksListTable;
