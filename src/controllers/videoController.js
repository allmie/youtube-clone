import "../db";
import routes from "../routes";

export const home = (req, res) => {
  res.render("home", { pageTitle: "Home", audios });
};
export const search = (req, res) => {
  const {
    query: { searchTerm },
  } = req;

  res.render("search", { pageTitle: "Search", searchTerm, audios });
};

export const getUpload = (req, res) => {
  res.render("upload", { pageTitle: "Upload" });
};
export const postUpload = (req, res) => {
  const {
    body: { videoFile, title, description },
  } = req;
  // To Do: Upload and save video

  res.redirect(routes.videoDetail(22233));
};

export const videoDetail = (req, res) =>
  res.render("videoDetail", { pageTitle: "Video Detail" });
export const videoEdit = (req, res) =>
  res.render("videoEdit", { pageTitle: "Video Edit" });
export const videoDelete = (req, res) =>
  res.render("videoDelete", { pageTitle: "Video Delete" });
