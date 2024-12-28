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
app.use("/api/items", itemRoutes);

app.use((req, res) => {
    try {
        return res.status(404).json({ message: 'This request does not exist.' });
    } catch (err) {
        return res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Database
mongoose.connect(process.env.MONGO_URI)
    .then(result => {
        console.log("Connected")
        app.listen(PORT);
    }).catch(err => {
        console.log(err);
    });

