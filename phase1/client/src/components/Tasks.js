import React from "react";
import TasksListTable from "./TasksListTable";
import TasksInputField from "./TasksInputField";
import TasksCardTitle from "./TasksCardTitle";
import TasksEditInput from "./TasksEditInput"

class Tasks extends React.Component {

  render() {
    return (
      <div>
      <TasksCardTitle />
      <div style={{ marginBottom: "25px" }}>
        <TasksInputField style={{ marginBottom: "25px" }} />
      </div>
      <TasksListTable/>
    </div>
  );
}
};

export default Tasks;
