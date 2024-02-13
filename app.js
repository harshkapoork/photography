const express = require("express");
const app = express();
const port = process.env.PORT || 1001;
const path=require("path")
app.listen(port, () => {
    console.log("server is created at",port)
})

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"))

app.use(express.static(path.join(__dirname,"public")))


app.get("/", (req, res) => {
        console.log("/")
        res.render("home.ejs");
})
app.get("/contact", (req, res) => {
    console.log("contact");
    res.render("contact.ejs")
})
app.get("/about", (req, res) => {
    console.log("about")
    res.render("about.ejs")
})
app.get("/works", (req, res) => {
    console.log("work")
    res.render("work.ejs")
})
app.get("/services", (req, res) => {
    console.log("product")
    res.render("services.ejs")
})
app.get("*", (req, res) => {
    console.log("*")
    res.send("page not found")
})
    
app.post("/contact",(req, res)=> {
    console.log("submited")
    res.render("form.ejs")
})
