import React from "react";
import TasksListTable from "./TasksListTable";
import TasksInputField from "./TasksInputField";
import TasksCardTitle from "./TasksCardTitle";
import TasksFolderTable from "./phase2/TasksFolderTable";
import TasksFolderInputField from "./phase2/TasksFolderInputField";
import TasksFolderCardTitle from "./phase2/TasksFolderCardTitle";

class Tasks extends React.Component {
  render() {
    return (
      <div>
        <TasksFolderCardTitle />
        <div style={{ marginBottom: "25px" }}>
          <TasksFolderInputField style={{ marginBottom: "25px" }} />
          <TasksFolderTable />
        </div>
      </div>
    );
  }
}

export default Tasks;
