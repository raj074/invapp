const mongoose = require("mongoose");
const { Schema } = mongoose;

const clientSchema = new Schema(
  {
    clientName: {
      type: String,
      required: true,
      trim: true,
      maxlength: 25,
    },
    user: {
        type: mongoose.Types.ObjectId,
        ref: 'user'
      },
    firstName: {
      type: String,
      required: true,
      trim: true,
      maxlength: 25,
    },
    lastName: {
      type: String,
      required: true,
      trim: true,
      maxlength: 25,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    mobile: {
      type: String,
      default: "",
      unique: true,
    },
    billingAddress: {
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

module.exports = mongoose.model("client", clientSchema);
