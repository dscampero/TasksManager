import React from "react";
import { TextField, Button } from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";

const tasksInputField = () => {
  return (
    <div>
      <TextField
        label="Type a new task"
        variant="outlined"
        style={{ width: "50%", marginRight: "15px" }}
      />
      <Button style={{ display: "inline-block", color: "#006816" }}>
        <AddCircleIcon fontSize="large" />
      </Button>
    </div>
  );
};

export default tasksInputField;
