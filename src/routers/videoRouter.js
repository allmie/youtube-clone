import express from "express";
import {
  upload,
  videoDelete,
  videoDetail,
  videoEdit,
} from "../controllers/videoController";

const videoRouter = express.Router();

videoRouter.get("/upload", upload);
videoRouter.get("/:id", videoDetail);
videoRouter.get("/:id/edit", videoEdit);
videoRouter.get("/:id/delete", videoDelete);

export default videoRouter;
