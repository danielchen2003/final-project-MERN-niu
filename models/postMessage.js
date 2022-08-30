import mongoose from "mongoose"

const postSchema = mongoose.Schema(
  {
    title:  { type: String, required: true },
    message: String,
    tags: [String],
    year:Number,
    babyName: String,
    location: String,
    selectedFile: String,
    likeCount: {
      type: Number,
      default: 0,
    },
    createdAt: {
      type: Date,
      default: new Date(),
    },
  },
  {
    timestamps: true,
  }
)

const PostMessage = mongoose.model("PostMessage", postSchema)

export default PostMessage
