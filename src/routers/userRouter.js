import express from "express";

const userRouter = express.Router();

userRouter.get("/edit-profile", (req, res) => res.send("edit-profile"));
userRouter.get("/change-password", (req, res) => res.send("change-password"));
userRouter.get("/:id", (req, res) => res.send("user Detail"));

export default userRouter;
