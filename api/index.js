const express = require('express')
const fetch = require('node-fetch')

const app = express()

app.get('/api/search', (req, res)=>{
  const query = req.query.q
  fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${query}`)
    .then((res)=>{
      return res.json()
    })
    .then((json)=>{
      const items = []
          json.results.map(result => {
              const item = {
                  id: result.id,
                  title: result.title,
                  price: result.price,
                  currency_id: result.currency_id,
                  available_quantity: result.available_quantity,
                  thumbnail: result.thumbnail,
                  condition: result.condition,
              }
              items.push(item)
          })
      res.send(items)
    })
})

app.listen(4000)