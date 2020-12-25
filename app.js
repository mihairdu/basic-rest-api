const express = require('express');
const mongoose = require('mongoose');
require('dotenv/config');

const app = express();

//Middlewares
app.use('/posts', () => {
    console.log("This is a middleware running!");
});


//Routes
app.get('/', (req, res) => {
    res.send("Hello, home!");
});


//connect to DB
mongoose.connect(
    process.env.DB_CONNECTION,
    { useUnifiedTopology: true, useNewUrlParser: true },
    () => {console.log("Connected to DB");
});

var db = mongoose.connection;
db.on('error', console.error.bind(console, "MongoDB connection error:"));


//Listening to the server
app.listen(3000);