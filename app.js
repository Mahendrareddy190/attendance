const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const port = 5000;
require("dotenv").config();
const studentrouter = require("./routes/student_list");
const Attendencerouter = require("./routes/attendence");
 
// dbcoonection
mongoose
  .connect( "mongodb+srv://mahendra:mahi1432@present.s4kpf.mongodb.net/teacher?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("db is connected "))
  .catch(() => console.log("db is not connected"));

// middlewares
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());
// my routesnp 
app.use("/api", studentrouter);
app.use("/api", Attendencerouter);


app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
