require('dotenv').config()
const express =require ("express");
const app=express();

app.get('/',(req,res)=>{
    res.send('Hello from akshay')
})

app.get('/linkedin',(req,res)=>{
    res.send("akshay's linkedsfddin");
})


app.listen(process.env.PORT, ()=>{
    console.log('first example')
});
