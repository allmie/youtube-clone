import express from "express";

const videoRouter = express.Router();

videoRouter.get("/upload", (req, res) => res.send("video upload"));
videoRouter.get("/:id", (req, res) => res.send("video detail"));
videoRouter.get("/:id/edit", (req, res) => res.send("video edit"));
videoRouter.get("/:id/delete", (req, res) => res.send("video delete"));

export default videoRouter;
