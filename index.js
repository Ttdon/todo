require("./database/db");
//const origins=require("./cors")
const express = require("express");
const bodyParser = require('body-parser');
const cors = require("cors");
const task = require('./tasks/task');
const app = express();
const port = 3001;
//app.use(cors(origins.corsOptions))
app.use(cors());
app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)
app.use("/api/v1/tasks",task)
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
   });