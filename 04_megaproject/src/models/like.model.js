import mongoose,{Schema,model} from "mongoose";

const likeSchema = new Schema({
  video: {
    type: Schema.Types.ObjectId,
    ref: "Video",
  },
  comment: {
    type: Schema.Types.ObjectId,
    ref: "Comment",
  },
  tweet: {
    type: Schema.Types.ObjectId,
    ref: "Tweet",
  },
  likedBy: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  totalLikes: { // total likes for a video this is not normalized as we are not using this field for any query
    type: Number,
    default: 0,
  },
},{timestamps:true});

export const Like = model("Like",likeSchema);