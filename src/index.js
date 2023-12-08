const express = require("express");
const app = express();

app.get("/", (request, response) => {
  response.json({ message: "every thing is fine" });
});
app.listen(8080, () => {
  console.log("This server running in port 8080");
});
