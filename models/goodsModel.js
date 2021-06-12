const mongoose = require("mongoose");
const { Schema } = mongoose;

const goodsSchema = new Schema(
  {
    goodsName: {
      type: String,
      required: true,
      trim: true,
      maxlength: 25,
    },
    searchCode: {
      type: String,
      maxlength: 10,
      default: "",
    },
    user: {
        type: mongoose.Types.ObjectId,
        ref: 'user'
      },
    price: {
      type: Number,
      default: "",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("goods", goodsSchema);
