import express from "express";

const app = express()

app.get("/",(req,res) => {
    res.send("Server is ready")
});

app.get("/api/superheroes", (req,res) => {
    // const data = require("./data/jokes.json");
    const data = [
        {id:1, name: "Batman", universe: "DC" },
        {id:2, name: "Superman", universe: "DC" },
        {id:3, name: "Spiderman", universe: "Marvel" },
        {id:4, name: "Ironman", universe: "Marvel" },
    ]

    res.send(data);
    // res.send(data.slice(0,5));
});

const port = process.env.PORT || 3000;

app.listen(port, ()=>{
    console.log(`Server at http://localhost:${port}`)
});