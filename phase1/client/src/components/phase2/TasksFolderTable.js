/* eslint-disable no-unused-vars */
import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import FolderIcon from "@mui/icons-material/Folder";
import axios from "axios";
import TasksListTable from "../TasksListTable";

class TasksFolderTable extends React.Component {
  state = {
    folderList: [],
    taskList: [],
    taskListFiltered: [],
    show: false,
    idnumber: 0,
    idFolderSelected: 1
  };

  //   showEditField = (taskId) => {
  //     this.setState({ show: true, idnumber: taskId });
  //   };

  onSubmitClick = (value) => {
    axios.post("http://localhost:4000/newTask", {
      taskName: value,
      idFolderSelected: this.state.idFolderSelected
    })
    this.getTasksList();
    this.getFoldersList();
    // this.renderFolderTasks(this.state.idFolderSelected);
  }
  componentDidMount() {
    this.getTasksList()
    this.getFoldersList();
    // this.renderFolderTasks(this.state.idFolderSelected);
  }

  componentDidUpdate() {
    this.getTasksList()
    this.getFoldersList();
    // this.renderFolderTasks(this.state.idFolderSelected);
  }

  getTasksList = () => {
    axios
      .get("http://localhost:4000/tasks")
      .then((response) => response.data)
      .then((response) => this.setState({ taskList: response }));
  };


  getFoldersList = () => {
    axios
      .get("http://localhost:4000/folders")
      .then((response) => response.data)
      .then((response) => this.setState({ folderList: response }));
  };
  

  onDeleteClick = (folderId) => {
    axios.delete(`http://localhost:4000/deleteFolder/${folderId}`);
    this.getFoldersList();
  };

  renderFolderTasks = (folderId) => {
    console.log('arreglo: ',this.state.taskList)
    const taskFound = this.state.taskList.filter(element => element.taskFolderId === folderId);
      this.setState({...this.state, taskListFiltered: taskFound, idFolderSelected: folderId})
      console.log('arregloF: ',this.state.taskListFiltered)
  }

  render() {
    
    return (
      <>
        {/* {this.state.show && (
          <TasksEditInput
            taskId={this.state.idnumber}
            estado={this.state}
            folderList={this.getFoldersList()}
          />
        )} */}

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
                <TableCell
                  className="boton"
                  style={{ color: "white" }}
                  align="left"
                >
                  Folder Name
                </TableCell>
                <TableCell style={{ color: "white" }} align="center">
                  Options
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {this.state.folderList.map((folder) => (
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align="left">
                    <IconButton>
                      <FolderIcon
                        fontSize="large"
                        style={{ color: "#006816", marginBottom: "5px" }}
                        onClick={() => {this.renderFolderTasks(folder.folderId)}}
                      />
                    </IconButton>
                    {folder.folderName}
                  </TableCell>
                  <TableCell align="center">
                    <div>
                      <IconButton>
                        <DeleteIcon
                          fontSize="large"
                          style={{ color: "#006816" }}
                          onClick={() => this.onDeleteClick(folder.folderId)}
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
        <TasksListTable taskLists={this.state.taskListFiltered} onClickAdd={(value) => {this.onSubmitClick(value)}}/>
      </>
    );
  }
}

export default TasksFolderTable;
