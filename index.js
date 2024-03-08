const express = require('express');
const app =express();

app.use(express.json());

app.get("/",(req,res)=>{
    res.send("Welcome");
})
app.get("/about",(req,res)=>{
    res.send('This is the About Page');
})

app.post("/body",(req,res)=>{
    let id=req.body.id;
    let name=req.body.name;
    console.log(id);
    console.log(name);
    res.send("This is the Body Method");
})

app.post("/params/:name",(req,res)=>{
   
    let name=req.params.name;
   
    console.log(name);
    res.send("This is the Params");
})

app.post("/query", (req, res) => {
    let id = req.query.id;
    let name = req.query.name;
    console.log(id);
    console.log(name);
    res.send("This is the Query Method");
});

app.listen(2000, () => {
    console.log("This is the listen Function");
})