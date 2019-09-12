const express = require('express');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');
const expressHandlebars = require('express-handlebars');
const dotenv = require('dotenv');

var app = express();

//Middleware
app.use(bodyParser.json());
app.use(cors());

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));