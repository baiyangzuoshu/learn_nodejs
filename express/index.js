const express = require("express");
const app = express();
const mongoose = require("mongoose");
const db = require("./db/db");
const bodyParser = require("body-parser");

mongoose.connect("mongodb+srv://test:test1234@cluster0-lzkfi.mongodb.net/test?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    keepAlive:true
})

mongoose.connection.on("error", console.error.bind(console, new Error("db connet failed")));
mongoose.connection.once("open", (err) => { 
    if (err) return console.error("db open failed" + err);
    console.info("db open");
})

app.set("view engine", "ejs");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use((req, res, next)=>{ 
    console.log("next");
    next();
})

app.use("/assets", express.static("assets"));//转换为静态文件

app.get("/", (req,res) => { 
    res.sendFile(__dirname+"/public/index.html");
})

app.get("/profile", (req, res) => { 
    res.render("profile", {name:"EJS"});
})

app.get("/getBlogs", async (req, res) => {
    let result = await db.findAllBlogs();
    res.send(result);
})

app.post("/addBlogs", async (req, res) => { 
    let result=await db.addBlog(req.body.title, req.body.body);
    res.send(result);
})

app.post("/findBlogById", async (req, res) => { 
    let result = await db.findBlogById(req.body.id);
    res.send(result);
})

app.listen(666,() => {
    console.log("listen 666");
});