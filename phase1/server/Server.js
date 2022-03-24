const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const connection = require("./Db");
const app = express();

app.use(cors());
app.use(bodyParser.json());

//route for listing all tasks
app.get("/tasks", (req, res) => {
  const TASK_QUERY = `SELECT * FROM tasksmanager.tasks`;
  connection.query(TASK_QUERY, (err, response) => {
    if (err) {
      console.log(err);
    } else {
      res.send(response);
    }
  });
});

//to add a task
app.post("/newTask", (req, res) => {
  const ADD_QUERY = `INSERT INTO tasksmanager.tasks (taskFolderId, taskName, taskStatus) values (1,'${req.body.taskName}',0)`;
  connection.query(ADD_QUERY, (err) => {
    if (err) {
      console.log(err);
    } else {
      res.send("task has been added");
    }
  });
});

//to delete a task
app.delete("/deleteTask/:taskId", (req, res) => {
  const DELETE_QUERY = `DELETE FROM tasksmanager.tasks WHERE (taskId=${req.params.taskId})`;
  connection.query(DELETE_QUERY, (err) => {
    if (err) {
      console.log(err);
    }
  });
});


app.listen(4000, () => {
  console.log("Server running on port 4000");
});
