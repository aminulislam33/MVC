const express = require('express');
const fs = require('fs');
const { default: mongoose } = require('mongoose');
const { connectMongoDB } = require('./connection');
const userRouter = require("./routes/user");
const { logReqRes } = require('./middlewares/index');

const app = express();
const PORT = 8000;

//Connection to mongoDB
connectMongoDB("mongodb://127.0.0.1:27017/youtube-app-1").then(()=>{
    console.log("MongoDB Connected!");
});

//middlewares 
app.use(express.urlencoded({extended: false}));
app.use(logReqRes("log.txt"));

//Routes
app.use("/api/users", userRouter);

app.listen(PORT, () => {
    console.log(`server started on ${PORT}`);
});