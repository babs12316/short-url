const express= require("express");
const urlRouter= require("./routes/url");
const connecToDB= require("./dbConnection");
const log= require("./middelware/log");
const path= require("path");
const staticRouter= require("./routes/staticRouter");

const ejs= require("ejs");

const app= express();
const PORT= 2000;
const dotenv = require('dotenv');
dotenv.config();
app.set("view engine", "ejs");
app.set("views",path.resolve("./views"));

app.use(express.urlencoded({extended:false}));
app.use(log("log.txt"));

connecToDB("mongodb://127.0.0.1:27017/short-urls")
    .then(() => console.log("connected to monogodb"))
    .catch(error => console.log("error while connecting to database", error));

app.use("/api/urls", urlRouter);
app.use("/", staticRouter);
app.listen(process.env.PORT, ()=>{console.log(`app started listening on port ${process.env.PORT}`)});
