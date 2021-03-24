import express from "express";
import {
  changePassword,
  editProfile,
  userDetail,
  users,
} from "../controllers/userController";

const userRouter = express.Router();

userRouter.get("/", users);
userRouter.get("/edit-profile", editProfile);
userRouter.get("/change-password", changePassword);
userRouter.get("/:id", userDetail);

export default userRouter;
