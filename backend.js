/* eslint-disable*/
const express = require("express");
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(cors());

const database = ['these', 'are', 'just some sample strings to get', 'everything', 'started', '', '\n'];

app.get("/", function (req, res, next) {
  try {
    return res.json(database);
  } catch (err) {
    return next(err)
  }
});

app.post("/", function (req, res, next) {
  try {
    database.unshift(req.body.word);
    return res.json(database);
  } catch (err) {
    return next(err)
  }
});


/** general error handler */
app.use((err, req, res, next) => {
  res.status(err.status || 500);

  return res.json({
    error: err,
  });
});


app.listen(3001, function () {
  console.log("App on port 3001");
});