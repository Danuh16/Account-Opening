const mongoose = require('mongoose')
const Schema = mongoose.Schema
const {means,cardType,electronicBankingPreference,transactionAlertPreference,chequeCategory}  = require("../constants/Constants")





const meansOfIdentificationSchema = new Schema({
    means:{
        type:Boolean,
        require:true,
        enum:means
    },
    other:{
        type:String,
        require:false
    },
    idNo:{
        type:String,
        require:true,
    },
    issueDateId:{
        type:Date,
        require:true,
    }, 
    expireDate:{
        type:Date,
        require:true,
    },
    cardType:{
        type:String,
        require:false,
        enum:cardType
    },
    electronicBankingPreference:{
        type:String,
        require:false,
        enum:electronicBankingPreference
    },
    transactionAlertPreference:{
        type:String,
        require:false,
        enum:transactionAlertPreference
    },
    chequeCategory:{
        type:Boolean,
        require:false,
        enum:chequeCategory
    },
    preConfirm:{
        type:String,
        require:false,
    },
    personalId: {
        type: mongoose.Types.ObjectId,
        ref: "personal",
      },
})

module.exports  = mongoose.model("meansOfIdentification",meansOfIdentificationSchema)