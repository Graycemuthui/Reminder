const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db/db");

//middleware
app.use(cors());
app.use(express.json()); //req.body

//ROUTES//

// call the create assignment route
app.use("/assignments", require("./routes/assignments"));

app.listen(5000, () => {
  console.log("server has started on port 5000");
});
