const express = require("express");
const path = require("path");

//comment
app.use(express.static(path.join(__dirname, "./frontend/build")));

const app = express();

app.get("/names", (req, res) => {
  res.send("avintha sandaruwan");
});

app.listen(5000, () => {
  console.log("server running on port 5000");
});
