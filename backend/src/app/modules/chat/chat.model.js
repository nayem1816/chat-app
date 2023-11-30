const mongoose = require("mongoose");
const chatModel = mongoose.Schema(
  {
    chatName: {
      type: String,
      required: true,
      trim: true,
    },
    isGroupChat: { type: Boolean },
    users: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
    groupAdmin: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
    groupPhoto: {
      fileName: String,
      url: String,
      public_id: String,
    },
    groupSuperAdmin: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    __v: false,
  },
  { timestamps: true }
);

const ChatModel = mongoose.model("Chat", chatModel);
module.exports = ChatModel;
