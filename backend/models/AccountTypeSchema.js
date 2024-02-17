const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const {
  productType,
  wadiahSafekeeping,
  amanahCurrent,
  mudarabahSaving,
  fycAccount,
  accountType,
} = require("../constants/Constants");



const accountSchema = new Schema({
  productType: {
    type: String,
    require: true,
    enum: productType,
  },
  wadiahSafekeeping: {
    type: String,
    require: true,
    enum: wadiahSafekeeping,
  },
  other: { type: String },
  amanahCurrent: {
    type: String,
    require: true,
    enum: amanahCurrent,
  },
  other: { type: String },
  mudarabahSaving: {
    type: String,
    require: true,
    enum: mudarabahSaving,
  },
  other: { type: String },
  fycAccount: {
    type: String,
    require: true,
    enum: mudarabahSaving,
  },
  other: { type: String },
  accountType: {
    type: Boolean,
    require: true,
    enum: accountType,
  },
  otherTypeOfAccount: { type: String },
  personalId: {
    type: mongoose.Types.ObjectId,
    ref: "personal",
  },
});

module.exports = mongoose.model("accountType", accountSchema);
