const express = require('express')
const path = require('path')

const host = '0.0.0.0';
const port = process.env.PORT || 3000;

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .listen(port, host, () => console.log(`Listening on ${ PORT }`))
