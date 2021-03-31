import app from "./app";
import dotenv from "dotenv";
dotenv.config();
import "./models/Video";

const PORT = process.env.PORT || 4000;

const handleListening = () => console.log("Listening!");

app.listen(PORT, handleListening);
