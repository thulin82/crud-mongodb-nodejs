const express = require('express');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');
const expressHandlebars = require('express-handlebars');
const dotenv = require('dotenv');
require('./models/db');

dotenv.config();

const app = express();

//Middleware
app.use(
    bodyParser.urlencoded({
        extended: true
    })
);
app.use(bodyParser.json());
app.set('views', path.join(__dirname, '/views/'));
app.engine(
    'hbs',
    expressHandlebars({
        extname: 'hbs',
        defaultLayout: 'mainLayout',
        layoutsDir: __dirname + '/views/layouts/'
    })
);
app.use(cors());

const port = process.env.PORT;

app.listen(port, () => console.log(`Server started on port ${port}`));
