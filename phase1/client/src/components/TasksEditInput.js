import React from "react";
import { TextField, Button } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import axios from "axios";

class TasksInputField extends React.Component {
  state = { newTaskName: "" };

  onUpdateClick = (taskId) => {
    axios.put(`http://localhost:4000/updateTask/${taskId}`, {
      newTaskName: this.state.newTaskName,
    });
    this.props.estado.show = false;
    this.props.estado.idnumber = 0;
    this.props.taskList();
  };

  render() {
    return (
      <>
        <div>
          <TextField
            label="Type a new name for the task"
            variant="outlined"
            style={{ width: "50%", marginRight: "15px" }}
            value={this.state.task}
            onChange={(e) => this.setState({ newTaskName: e.target.value })}
          />
          <Button style={{ display: "inline-block", color: "#006816" }}>
            <SendIcon
              fontSize="large"
              onClick={() => this.onUpdateClick(this.props.taskId)}
            />
          </Button>
        </div>
      </>
    );
  }
}

export default TasksInputField;
