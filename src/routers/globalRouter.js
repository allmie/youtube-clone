import express from 'express';
import routes from '../routes';
import {
  getJoin,
  getLogin,
  logout,
  postJoin,
  postLogin,
} from '../controllers/userController';
import { home, search } from '../controllers/videoController';
import { onlypublic } from '../../middlewares';

const globalRouter = express.Router();

globalRouter.get(routes.join, onlypublic, getJoin);
globalRouter.post(routes.join, onlypublic, postJoin, postLogin);

globalRouter.get(routes.login, onlypublic, getLogin);
globalRouter.post(routes.login, onlypublic, postLogin);

globalRouter.get(routes.home, home);
globalRouter.get(routes.logout, logout);
globalRouter.get(routes.search, search);

export default globalRouter;
