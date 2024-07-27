const path = require('path');
const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const app = express();
const port = 3000;

const route = require('./routes');
const db = require('./config/db');
// connect 
db.connect();

// Routes init
route(app);

app.use(express.static(path.join(__dirname, 'public')));

app.use(
    express.urlencoded({
        extended: true,
    }),
);

app.use(express.json());
// HTTP
app.use(morgan('combined'));

// Template engine
app.engine(
    'handlebars',
    handlebars.engine({
        extname: 'handlebars',
    }),
);
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'resources', 'views'));

// Routes

// 127.0.0.1:--> localhost:
app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});
