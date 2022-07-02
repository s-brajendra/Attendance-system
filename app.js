const express = require('express');
const app = express();
const PORT = 8000;




app.use(express.json());
app.use(express.urlencoded({
  extended: false
}));

app.use(express.static('assets'));



app.set('view engine','ejs');
app.set('views','./views');



app.use('/',require("./routers/index"));








app.use(errorHandler);
app.listen(PORT,function(err){
    if(err){
        console.log("errror in running server");
    }
});



function errorHandler(err,req,res,next){
    if(err){
        res.send("<h1> some error is there</h1>");
    }
    
}




