import React from "react";
import { Typography } from "@mui/material";
import ListAltIcon from "@mui/icons-material/ListAlt";

const TasksCardTitle = () => {
  return (
    <div>
      <ListAltIcon fontSize="large" style={{ color: "#006816" }} />
      <Typography
        variant="h3"
        style={{
          fontWeight: "bold",
          marginLeft: "10px",
          marginBottom: "15px",
          marginTop: "35px",
          color: "#313131",
          display: "inline-block",
        }}
      >
        Tasks List Table
      </Typography>
    </div>
  );
};

export default TasksCardTitle;
