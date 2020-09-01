const express = require("express");
const fetch = require("node-fetch");

const app = express();

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  res.header("Allow", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

app.get("/api/search", (req, res) => {
  let condition = "";
  const { q, limit, offset, sort, ITEM_CONDITION } = req.query;

  ITEM_CONDITION === "0"
    ? condition
    : (condition = `&ITEM_CONDITION=${ITEM_CONDITION}`);

  // console.log('condicion ', condition)

  fetch(
    `https://api.mercadolibre.com/sites/MLA/search?q=${q}&limit=${limit}&offset=${offset}&sort=${sort}${condition}`
  )
    .then((res) => {
      return res.json();
    })
    .then((json) => {
      const items = [];
      json.results.map((result) => {
        const item = {
          id: result.id,
          title: result.title,
          price: result.price,
          currency_id: result.currency_id,
          available_quantity: result.available_quantity,
          thumbnail: result.thumbnail,
          condition: result.condition,
        };
        items.push(item);
      });
      res.json({
        total: json.paging.total,
        results: items,
      });
    });
});

app.listen(4000);
