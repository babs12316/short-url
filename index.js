const express= require("express");
const urlRouter= require("./routes/url");
const connecToDB= require("./dbConnection");

const app= express();
const PORT= 2000;

app.use(express.urlencoded({extended:false}));

connecToDB("mongodb://127.0.0.1:27017/short-urls")
    .then(() => console.log("connected to monogodb"))
    .catch(error => console.log("error while connecting to database", error));

app.use("/api/urls", urlRouter);
app.listen(PORT, ()=>{console.log(`app started listening on port ${PORT}`)});