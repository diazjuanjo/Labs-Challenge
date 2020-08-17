const express = require('express')

const app = express()

app.get('/api/search', (req, res)=>{
  res.send('Hola')
})

app.listen(4000)