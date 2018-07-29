const express = require('express');
const mongoose = require('mongoose');
const ListModel = require('./itemModel.js');

const app = express();

mongoose.connect("mongodb://test:test123@ds259361.mlab.com:59361/todo");

app.get("/list", (req, res) => {
  ListModel.find((err, result) => {
    if (err) {
      res.sendStatus(403);
    } else
      res.send({ result });
  });
});
app.listen(process.env.port || 4000, () => {
  console.log("server started");
});