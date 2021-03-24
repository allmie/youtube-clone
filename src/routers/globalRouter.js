import express from "express";

const globalRouter = express.Router();

globalRouter.get("/", (req, res) => res.send("Home"));
globalRouter.get("/join", (req, res) => res.send("join"));
globalRouter.get("/login", (req, res) => res.send("login"));
globalRouter.get("/logout", (req, res) => res.send("logout"));
globalRouter.get("/search", (req, res) => res.send("search"));

export default globalRouter;
