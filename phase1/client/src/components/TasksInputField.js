import React from "react";
import { TextField, Button } from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import axios from 'axios'

class tasksInputField extends React.Component {

  state = { taskName: ""}

  onSubmitClick = () => {
    axios.post("http://localhost:4000/newTask", {
      taskName: this.state.taskName
    })
  }
  
  render(){
    console.log(this.state.task)
    return (
      <div>
      <TextField
        label="Type a new task"
        variant="outlined"
        style={{ width: "50%", marginRight: "15px" }}
        value={this.state.task}
        onChange={e => this.setState({taskName: e.target.value})}
        />
      <Button style={{ display: "inline-block", color: "#006816" }}>
        <AddCircleIcon fontSize="large" onClick={() => this.onSubmitClick()} />
      </Button>
    </div>
  );
}
};

export default tasksInputField;
