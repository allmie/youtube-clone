import express from "express";

const app = express();
const handleListening = () => console.log("Listening!");

app.get("/", (req, res) => res.send("Hiii!"));
app.listen(4000, handleListening);
