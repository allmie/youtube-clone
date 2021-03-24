import routes from "./routes";

// templates에 적용됨, import routes from "routes"를 대체하지는 못함
export const localsMiddleware = (req, res, next) => {
  res.locals.routes = routes;
  res.locals.siteName = "Cloning-youtube";
  next();
};
