const express= require("express");
const {handleGetUrl,handleGenerateShortUrl,handleRedirectUrl}= require("../controllers/url");
const urlRouter= express.Router();

urlRouter.route("/").get(handleGetUrl).post(handleGenerateShortUrl);

urlRouter.get("/:shortUrl", handleRedirectUrl);

module.exports= urlRouter;