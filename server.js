const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();

const itemRoutes = require("./routes/item-routes");

const app = express();
const PORT = process.env.PORT || 8000;

app.use(cors());
app.use(bodyParser.json());

// Routes
app.use('/', (req, res) => {
    return res.status(200).json({ message: 'Hello Everyone' });
});

app.use("/api/items", itemRoutes);

// Database
mongoose.connect(process.env.MONGO_URI)
    .then(result => {
        console.log("Connected")
        app.listen(PORT);
    }).catch(err => {
        console.log(err);
    });

