const URL= require("../models/url");
const shortid = require('shortid');

function handleGetUrl(req,res){
   return res.status(200).end("hello I am server");    
}

async function handleGenerateShortUrl(req,res){
    const body= req.body.url;
    const shortId= shortid.generate();
    if(!body){ return res.status(400).json({msg:"url is required!"})};
    await URL.create({
        shortId: shortId,
        redirectUrl:body
   })
   return res.render("home",{id: shortId});
}

async function handleRedirectUrl (req,res){
    const shortUrl= req.params.shortUrl;
    const result= await URL.findOne({shortId:shortUrl})
    res.redirect(result.redirectUrl)

}

module.exports={handleGetUrl,handleGenerateShortUrl, handleRedirectUrl}