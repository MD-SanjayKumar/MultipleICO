const express = require('express');
const app = express();
const path = require('path');
const port = '8000';
var { graphql, buildSchema } = require("graphql");
const cookieParser = require('cookie-parser');
app.use(cookieParser());

app.get("/", async(req, res)=>{
  res.sendFile(path.join(__dirname, "html", "home.html"));
})

app.get("/create", async(req, res)=>{
  res.sendFile(path.join(__dirname, "html", "create_ico.html"));
})

app.get("/register", async(req, res)=>{
  res.sendFile(path.join(__dirname, "html", "register_ico.html"));
})

app.get("/ico", async(req, res)=>{
  res.sendFile(path.join(__dirname, "html", "reg.html"));
})

app.get("/ico/dash", async(req, res)=>{
  console.log(process.env.RES_ADDR);
  res.sendFile(path.join(__dirname, "html", "dashboard.html"));
})

app.get("/ico/admin", async(req, res)=>{
  res.sendFile(path.join(__dirname, "html", "admin.html"));
})

app.get("/ico/admin/freeze", async(req, res)=>{
  res.sendFile(path.join(__dirname, "html", "restrict.html"));
})

app.get("/ico/admin/rate", async(req, res)=>{
  res.sendFile(path.join(__dirname, "html", "new_rate.html"));
})

app.get("/ico/admin/change", async(req, res)=>{
  res.sendFile(path.join(__dirname, "html", "change_admin.html"));
})

app.get("/ico/admin/start", async(req, res)=>{
  res.sendFile(path.join(__dirname, "html", "stime.html"));
})

app.get("/ico/admin/end", async(req, res)=>{
  res.sendFile(path.join(__dirname, "html", "etime.html"));
})

app.listen(port, async(req, res)=>{
    console.log(`Listening to port ${port}`);
})