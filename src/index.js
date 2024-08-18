const path = require('path');
const express = require('express');
const morgan = require('morgan');
const methodOverride = require('method-override');
const handlebars = require('express-handlebars');

const SortMiddleware = require('./app/middleware/SortMiddleware')

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

// Custome middleware
app.use(SortMiddleware);

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
            sortable: (field, sort) => {
                const sortType =  field ===  sort.column ? sort.type : 'default';
                
                const icons = {
                    default : 'fa-solid fa-sort',
                    asc: 'fa-solid fa-sort-up',
                    desc: 'fa-solid fa-sort-down',
                }

                const types = {
                    default : 'desc',
                    asc: 'desc',
                    desc: 'asc',
                }
                const icon = icons[sortType];

                const type = types[sortType] ;

                return `<a href="?_sort&column=${ field }&type=${type}">
                    <i class="${ icon }"></i>
                </a>`
            }
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
