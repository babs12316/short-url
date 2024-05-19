const express= require("express");
const router= express.Router();
const port= require("../index");

router.get("/", (req,res)=>{
    return res.render("home");
})



module.exports= router;
