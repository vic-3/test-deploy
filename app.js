const express = require("express")
const app = express()
app.get("/", (req, res)=>{
    res.send("Hello World")
})
app.get("/test", (req, res)=>{
    res.send("Hello guys")
})

app.listen(5000, ()=>{
    console.log("App running on port 3000")
} )