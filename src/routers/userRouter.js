import express from 'express';
import routes from '../routes';
import {
  changePassword,
  editProfile,
  userDetail,
  users,
} from '../controllers/userController';
import { onlyprivate } from '../../middlewares';

const userRouter = express.Router();

userRouter.get(routes.editProfile, onlyprivate, editProfile);
userRouter.get(routes.changePassword, onlyprivate, changePassword);
userRouter.get(routes.userDetail(), onlyprivate, userDetail);

export default userRouter;
