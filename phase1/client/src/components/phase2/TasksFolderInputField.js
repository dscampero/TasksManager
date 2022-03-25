import React from "react";
import { TextField, Button } from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import axios from 'axios'

class TasksFolderInputField extends React.Component {

  state = { folderName: ""}

  onSubmitClick = () => {
    axios.post("http://localhost:4000/newFolder", {
      folderName: this.state.folderName
    })
  }
  
  render(){
    return (
      <div>
      <TextField
        label="Type a new folder name"
        variant="outlined"
        style={{ width: "50%", marginRight: "15px" }}
        value={this.state.folder}
        onChange={e => this.setState({folderName: e.target.value})}
        />
      <Button style={{ display: "inline-block", color: "#006816" }}>
        <AddCircleIcon fontSize="large" onClick={() => this.onSubmitClick()} />
      </Button>
    </div>
  );
}
};

export default TasksFolderInputField;
