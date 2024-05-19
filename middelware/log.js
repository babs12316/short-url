const fs= require("fs");
function log(filename){
    return (req, res, next)=>{
      fs.appendFile(filename,`\n${Date.now()} ${req.ip} ${req.method} ${req.path} \n`,
      (err,data)=>{
        next();
      });
    };
}

module.exports= log