const addDays = require("date-fns/addDays");
const express = require("express");
let app = express();

app.get("/", (request, response) => {
  const full_Date = new Date();
  response.send(
    `${full_Date.getDate()}-${
      full_Date.getMonth() + 1
    }-${full_Date.getFullYear()}`
  );
});

app.listen(3000);

module.exports = app;
