const mongoose = require("mongoose");
const { Schema } = mongoose;

const salesBillSchema = new Schema(
  {
    total: {
      type: Number,
    },
    invoiceNumber: {
      type: Number,
    },
    date: {
      type: Date,
    },
    paymentDays: {
      type: Number,
    },
    user: {
        type: mongoose.Types.ObjectId,
        ref: 'user'
    },
    client: {
        type: mongoose.Types.ObjectId,
        ref: 'client'
    },
    clientName: String,
    city: String,
    state: String,
    country: String,
    billingAddress: String,
    items: [{
      goodsName: String,
      units: Number,
      price: Number,
      gst: Number,
      total: Number,
    }],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("salesBill", salesBillSchema);
