const mongoose = require('mongoose');
const dotenv = require('dotenv');
require('./Employee');
dotenv.config();

mongoose.connect(process.env.DB_URL, {useNewUrlParser: true, useUnifiedTopology: true}, (err) => {
    if (!err) {
        console.log("MongoDB Connected...");
    } else {
        console.log("An Error Occured");
    }
});
