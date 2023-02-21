const express = require("express");
const path = require("path");

app.use(express.static(path.join(__dirname, "/frontend/build")));

const app = express();

app.get("/names", (req, res) => {
  res.send("avintha");
});

app.listen(5000, () => {
  console.log("server running on port 5000");
});
