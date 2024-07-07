import express from "express";
import cors from "cors";

const app = express();

app.use(cors());

app.get("/getData", (req, res)=>{
    res.send("this is home route")
})
app.get("/", (req, res)=>{
    res.send("this is home route for sartik sharma")
})

app.listen(3000, ()=>{
    console.log("server is running at port 3000")
})