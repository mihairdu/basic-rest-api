const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv/config');

const app = express();

//middleware
app.use(cors());
app.use(bodyParser.json()); //make the data readable

//import routes
const postsRoute = require('./routes/posts');

//middleware
app.use('/posts', postsRoute);


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