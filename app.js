
const express= require('express');
const bodyParser=require('body-parser');

const app=express();

app.use(bodyParser.urlencoded({extended: true}));

app.get('/',function(req,res){
  res.sendFile(__dirname+"/index.html")
});


app.get('/greet',function(req,res){
  res.send("hello");
})

app.listen(process.env.PORT || 5000);
