const express = require("express");
require("dotenv").config();

const app = express();

app.use((err, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");
  res.header(
    "Access-Control-Allow-Methods",
    "GET,POST,PUT,DELETED,DELETE,OPTIONS"
  );
  res.header("Allow", "GET,POST,PUT,DELETED,DELETE,OPTIONS");

  next();
});

app.use(express.json());
// routes
app.use("/api", require("./routes/comics"));

app.listen(process.env.PORT, () => {
  console.log(`server running on port ${process.env.PORT}`);
});
