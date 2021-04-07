import multer from 'multer';
import routes from './src/routes';

const uploadVideo = multer({ dest: 'src/uploads/videos/' });

// templates에 적용됨, import routes from "routes"를 대체하지는 못함
export const localsMiddleware = (req, res, next) => {
  res.locals.routes = routes;
  res.locals.siteName = 'Cloning-youtube';
  res.locals.user = req.user || null;
  next();
};

// only one file upload, insert fileName in form
export const uploadMiddleware = uploadVideo.single(`videoFile`);
