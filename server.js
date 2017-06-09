"use strict"
const express = require('express');
const app = express();
let Json = {};
const requestIP = require('request-ip');
app.get('/',(req, res)=>{
  const clientIP = requestIP.getClientIp(req);
  const language = req.headers["accept-language"].split(',')[0];
  const regExp = /\(([^)]+)\)/;
  const software = regExp.exec(req.headers["user-agent"])[1];
  Json ={
    "ip address": clientIP,
    "language": language,
    "software": software
  }
  res.json(Json);
});

app.listen(process.env.PORT || 3000, ()=>{
  console.log('It is working');
});
