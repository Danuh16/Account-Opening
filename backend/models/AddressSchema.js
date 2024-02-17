const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const { homeType } = require("../constants/Constants");


const addressSchema = new Schema({
  country: {
    type: String,
    require: true,
  },
  region: {
    type: String,
    require: true,
  },
  city: {
    type: String,
    require: true,
  },
  subCity: {
    type: String,
    require: true,
  },
  wereda: {
    type: Number,
    require: true,
  },
  houseNo: {
    type: Number,
    require: false,
  },
  email: {
    type: String,
    require: false,
  },
  POBox: {
    type: Number,
    require: false,
  },
  homeType: {
    type: String,
    require: false,
    enum: homeType,
  },
  
  entryDate: { type: Date, defualts: Date.now },
  personalId: {
    type: mongoose.Types.ObjectId,
    ref: "personal",
  },
});

module.exports = mongoose.model("address", addressSchema);
