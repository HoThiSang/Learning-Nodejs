const path = require('path');
const express = require('express');
const morgan = require('morgan');
const methodOverride = require('method-override');
const handlebars = require('express-handlebars');
const app = express();
const port = 3000;

const route = require('./routes');
const db = require('./config/db');
// connect
db.connect();

app.use(
    express.urlencoded({
        extended: true,
    }),
);

app.use(express.json());

console.log(typeof express.json())

app.use(methodOverride('_method'));

// Routes init
route(app);

app.use(express.static(path.join(__dirname, 'public')));

// HTTP
app.use(morgan('combined'));

// Template engine
app.engine(
    'handlebars',
    handlebars.engine({
        extname: 'handlebars',
        helpers: {
            sum: (a, b) => a + b,
        },
    }),
);
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'resources', 'views'));

// Routes

// 127.0.0.1:--> localhost:
app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});
