const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 3000;

const db = async () => {
    try {
        await mongoose.connect(process.env.API, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log("Connected Successfully");
    } catch (err) {
        console.error("Database connection error:", err);
    }
};

// Invoke the database connection
db();

app.listen(port, () => {
    console.log(`Server Listening on port ${port}`);
});
