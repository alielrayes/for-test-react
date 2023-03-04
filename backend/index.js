const express = require("express");
const cors = require("cors");
const app = express();
const products = require("./products");
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Welcome our to online shop API...");
});

app.get("/products", (req, res) => {
  res.send(products);
});

app.get("/products/:id", (req, res) => {
  const product = products.find((item) => {
    return item.id == req.params.id;
  });

  res.send(product);
});

const port = process.env.PORT || 5005;
app.listen(port, console.log(`http://localhost:${port}`));
