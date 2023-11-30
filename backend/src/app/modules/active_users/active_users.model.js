const mongoose = require("mongoose");
const ActiveUserSchema = mongoose.Schema(
  {
    userId: {
      type: String,
    },
    socketId: {
      type: String,
    },
    __v: false,
  },
  { timestamps: true }
);

const ActiveUserModel = mongoose.model("ActiveUsers", ActiveUserSchema);
module.exports = ActiveUserModel;
