const express = require("express");
const phones = require("./phones.json");
const app = express();
const port = 3000;
var cors = require("cors");

app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World! from express");
});
app.get("/phones", (req, res) => {
  res.send(phones);
});
app.get("/phones/:id", (req, res) => {
  const id = parseInt(req.params.id);
  //   id ta peye jabo

  const phone = phones.find((phone) => phone.id === id) || {};
  res.send(phone);
  console.log(phone);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
