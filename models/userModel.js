const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema(
  {
    introCompletion: {
      type: Boolean,
      required: true,
      default: false,
    },
    myClients: [
      {
        type: mongoose.Types.ObjectId,
        ref: 'client'
      }
    ],
    myGoods: [
      {
        type: mongoose.Types.ObjectId,
        ref: 'goods'
      }
    ],
    fullname: {
      type: String,
      required: true,
      trim: true,
      maxlength: 25,
    },
    username: {
      type: String,
      required: true,
      trim: true,
      maxlength: 25,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    avatar: {
      type: String,
      default:
        "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png",
    },
    role: {
      type: String,
      default: "user",
    },
    mobile: {
      type: String,
      default: "",
    },
    address: {
      type: String,
      default: "",
    },
    street: {
      type: String,
      default: "",
    },
    zip: {
      type: String,
      default: "",
    },
    city: {
      type: String,
      default: "",
    },
    state: {
      type: String,
      default: "",
    },
    country: {
      type: String,
      default: "",
    },
    website: {
      type: String,
      default: "",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("user", userSchema);
