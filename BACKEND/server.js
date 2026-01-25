const express = require("express");
const mongoose = require("mongoose");

const app = express();

// Middleware
app.use("/" , (req , res, next) => {
    res.send("it is working");
});

mongoose.connect("mongodb+srv://admin:nOdwtf0dfwwhOub1@cluster0.fk8yltn.mongodb.net/")
.then(() => {
    console.log("Connected to MongoDB");
})
.then(() => {
    app.listen(5000);
})
.catch((err) => {
    console.log(err);
});

//nOdwtf0dfwwhOub1