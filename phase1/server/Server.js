const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const connection = require("./Db");
const app = express();

app.use(cors());
app.use(bodyParser.json());

//list all tasks
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
  const ADD_QUERY = `INSERT INTO tasksmanager.tasks (taskFolderId, taskName, taskStatus) values (${req.body.idFolderSelected},'${req.body.taskName}',0)`;
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

// to set checkbox
app.put("/completeTask/:taskId", (req, res) => {
  const CHECK_QUERY = `UPDATE tasksmanager.tasks SET taskStatus = ${req.body.completed} WHERE (taskId=${req.params.taskId});`;
  connection.query(CHECK_QUERY, (err) => {
    if (err) {
      console.log(err);
    }
  });
});

//to update a task
app.put("/updateTask/:taskId", (req, res) => {
  const UPDATE_QUERY = `UPDATE tasksmanager.tasks SET taskName = '${req.body.newTaskName}' WHERE (taskId=${req.params.taskId});`;
  connection.query(UPDATE_QUERY, (err) => {
    if (err) {
      console.log(err);
    }
  });
});


/* ----- phase 2 --------*/

//to create a task
app.post("/newFolder", (req, res) => {
  const ADD_QUERY = `INSERT INTO tasksmanager.folders (folderName) values ('${req.body.folderName}')`;
  connection.query(ADD_QUERY, (err) => {
    if (err) {
      console.log(err);
    } else {
      res.send("folders has been created");
    }
  });
});

//to delete a folder
app.delete("/deleteFolder/:folderId", (req, res) => {
  const DELETE_QUERY = `DELETE FROM tasksmanager.folders WHERE (folderId=${req.params.folderId})`;
  connection.query(DELETE_QUERY, (err) => {
    if (err) {
      console.log(err);
    }
  });
});

//list all folders
app.get("/folders", (req, res) => {
  const FOLDER_QUERY = `SELECT * FROM tasksmanager.folders`;
  connection.query(FOLDER_QUERY, (err, response) => {
    if (err) {
      console.log(err);
    } else {
      res.send(response);
    }
  });
});

app.listen(4000, () => {
  console.log("Server running on port 4000");
});
