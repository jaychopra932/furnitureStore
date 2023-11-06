var express = require("express");
let axios = require("axios");
var app = express();
app.use(express.json());
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, , authorization"
  );
  res.header("Access-Control-Allow-Methods", "GET,POST,DELETE,PUT,OPTIONS");
  next();
});
var port = process.env.PORT || 2410;
app.listen(port, () => console.log(`Node app listening on port ${port}!`));

let { products, users } = require("./data.js");

app.post("/login", function (req, res) {
  let body = req.body;
  let { email, password } = body;
  let user = users.find((a) => a.email == email && a.password == password);
  user ? res.send(user) : res.status(404).send("Invalid Email or Password");
});
app.get("/products/:category", function (req, res) {
  let category = req.params.category;
  let arr = products.filter((a) => a.category == category);
  res.send(arr);
});
app.get("/products", function (req, res) {
  res.send(products);
});

app.delete("/products/:prodCode", function (req, res) {
  let prodCode = req.params.prodCode;
  let index = products.findIndex((a) => a.prodCode == prodCode);
  products.splice(index, 1);
  res.send("Deleted");
});

app.put("/products/:prodCode", function (req, res) {
  let prodCode = req.params.prodCode;
  let body = req.body;
  let index = products.findIndex((a) => a.prodCode == prodCode);
  products[index] = body;
  res.send(body);
});

app.post("/products", function (req, res) {
  let body = req.body;
  products.push(body);
  res.send(body);
});
