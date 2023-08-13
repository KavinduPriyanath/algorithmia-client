const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const profileSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    profileImage: {
      type: String,
      required: true,
    },
    level: {
      type: String,
      required: true,
    },
    rank: {
      type: String,
      required: true,
    },
    playerID: {
      type: String,
      required: true,
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("profiles", profileSchema);