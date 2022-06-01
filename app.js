
const express= require('express');
const bodyParser=require('body-parser');

const app=express();

app.use(bodyParser.urlencoded({extended: true}));

app.get('/',function(req,res){
  res.sendFile(__dirname+"/index.html")
});

app.listen(process.env.PORT || 5000);
// app.listen(3000,function(){
//   console.log("server started at port 3000");
// });
