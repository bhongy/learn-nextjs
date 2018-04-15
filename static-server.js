const express = require("express");
const app = express();

app.use(express.static("out"));
app.listen("3000", () => {
  console.log("Static site is ready on http://localhost:3000");
});
