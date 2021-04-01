import express from "express";
import routes from "../routes";
import {
  getUpload,
  postUpload,
  videoDelete,
  videoDetail,
  getVideoEdit,
  postVideoEdit,
} from "../controllers/videoController";
import { uploadMiddleware } from "../../middlewares";

const videoRouter = express.Router();

videoRouter.get(routes.upload, getUpload);
videoRouter.post(routes.upload, uploadMiddleware, postUpload);

videoRouter.get(routes.videoDetail(), videoDetail);

videoRouter.get(routes.editVideo(), getVideoEdit);
videoRouter.post(routes.editVideo(), postVideoEdit);

videoRouter.get(routes.deleteVideo(), videoDelete);

export default videoRouter;
