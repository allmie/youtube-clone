import mongoose from "mongoose";

// model: data
const VideoSchema = new mongoose.Schema({
  fileUrl: {
    type: String,
    required: "File URL is reuired",
  },
  title: {
    type: String,
    required: "Title is required",
  },
  description: String,
  views: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const model = mongoose.model("Video", VideoSchema);

export default model;
