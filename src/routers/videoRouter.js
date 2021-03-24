import express from "express";
import routes from "../../routes";
import {
  upload,
  videoDelete,
  videoDetail,
  videoEdit,
} from "../controllers/videoController";

const videoRouter = express.Router();

videoRouter.get(routes.upload, upload);
videoRouter.get(routes.videoDetail, videoDetail);
videoRouter.get(routes.editVideo, videoEdit);
videoRouter.get(routes.deleteVideo, videoDelete);

export default videoRouter;
