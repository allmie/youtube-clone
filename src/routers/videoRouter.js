import express from 'express';
import routes from '../routes';
import {
  getUpload,
  postUpload,
  videoDelete,
  videoDetail,
  getVideoEdit,
  postVideoEdit,
} from '../controllers/videoController';
import { onlyprivate, uploadMiddleware } from '../../middlewares';

const videoRouter = express.Router();

videoRouter.get(routes.upload, onlyprivate, getUpload);
videoRouter.post(routes.upload, onlyprivate, uploadMiddleware, postUpload);

videoRouter.get(routes.videoDetail(), videoDetail);

videoRouter.get(routes.editVideo(), onlyprivate, getVideoEdit);
videoRouter.post(routes.editVideo(), onlyprivate, postVideoEdit);

videoRouter.get(routes.deleteVideo(), onlyprivate, videoDelete);

export default videoRouter;
