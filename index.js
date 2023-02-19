import express from 'express'
// const express= require('express');
import bodyParser from 'body-parser';
import Route from './routes/route.js';
import Connection from './database/db.js';
import cors from 'cors';

const app=express();
app.use(cors());
app.use(bodyParser.json({extended:true}));
// it has been used to remove blanck spaces in the 
app.use(bodyParser.urlencoded({extende: true}));
app.use('/',Route);
Connection();
const PORT=5000;
app.listen(PORT,()=>{
    console.log("server is started at PORT no : ",PORT)
})