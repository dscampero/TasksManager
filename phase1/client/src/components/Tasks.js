import React from "react";
import TasksListTable from "./TasksListTable";
import TasksInputField from "./TasksInputField";
import TasksCardTitle from "./TasksCardTitle";
import { Card } from "@mui/material";

const Tasks = () => {
  return (
    <Card
      style={{
        marginLeft: "5%",
        marginRight: "5%",
        marginTop: "5%",
        marginBottom: "5%",
        padding: "2%",
        boxShadow: "2px 2px 15px rgba(0, 0, 0, 0.35)",
        borderRadius: "25px",
      }}
    >
      <div>
        <TasksCardTitle />
        <div style={{ marginBottom: "25px" }}>
          <TasksInputField style={{ marginBottom: "25px" }} />
        </div>
        <TasksListTable />
      </div>
    </Card>
  );
};

export default Tasks;
