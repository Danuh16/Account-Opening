const mongoose = require('mongoose')
const Schema = mongoose.Schema
const {status,bankName}  = require("../constants/Constants")



const accountWithOtherBankSchema = new Schema({
    amount:{
        type:Number,
        require:false
    },
    bankName:{
        type:String,
        require:false,
        enum:bankName
    },
    accountNumber:{
        type:Number,
        require:false,
        require:false
    },
    status:{
        type:String,
        require:false,
        enum:status
    },
    personalId: {
        type: mongoose.Types.ObjectId,
        ref: "personal",
      },
})

module.exports = mongoose.model("accountWithOtheBank",accountWithOtherBankSchema)