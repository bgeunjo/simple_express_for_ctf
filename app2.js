const express=require('express');
const app=express();
const PORT=1235;
var url = require('url');

app.use('/static',express.static('public')); // can access files in public directory by ex) /static/func.js

app.get('/', (req,res)=>{
    var sql = decodeURI(url.parse(req.url).search).substr(1);

    res.send(sql);
})


app.listen(PORT,()=>{
    console.log(`Server is listening on ${PORT}`);
})