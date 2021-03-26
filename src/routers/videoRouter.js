import express from "express";
import routes from "../routes";
import {
  getUpload,
  postUpload,
  videoDelete,
  videoDetail,
  videoEdit,
} from "../controllers/videoController";

const videoRouter = express.Router();

videoRouter.get(routes.upload, getUpload);
videoRouter.post(routes.upload, postUpload);
videoRouter.get(routes.videoDetail(), videoDetail);
videoRouter.get(routes.editVideo, videoEdit);
videoRouter.get(routes.deleteVideo, videoDelete);

export default videoRouter;
