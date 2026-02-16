// const express=require('express');
import express from 'express'
import dotenv from 'dotenv'
dotenv.config();

const app=express();
const PORT=process.env.PORT || 3000;
app.get("/api/auth/signup",(req,res)=>{
    res.end("signup endpoint");
});

app.get("/api/auth/login",(req,res)=>{
    res.end("login endpoint");
});

app.get("/api/auth/signin",(req,res)=>{
    res.end("signin endpoint");
});

app.listen(PORT,()=> console.log("Server is Running "+PORT));