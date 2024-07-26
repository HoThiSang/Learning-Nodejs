const path = require('path');
const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')))

// HTTP 
app.use(morgan('combined'));

// Template engine
app.engine('handlebars', handlebars.engine({
  extname: 'handlebars',
}));
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'resources/views'));

// Routes
app.get('/', (req, res) => {
  res.render('home');
})

app.get('/news', (req, res) => {
  res.render('news');
})
// 127.0.0.1:--> localhost:
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})