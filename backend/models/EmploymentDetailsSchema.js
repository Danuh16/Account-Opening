const mongoose = require('mongoose')
const Schema = mongoose.Schema
const {employment,monthlyIncome}  = require("../constants/Constants")




const employmentSchema = new Schema({
   employment:{
     type:Boolean,
     require:true,
     enum:employment
   },
   monthlyIncome:{
    type:Boolean,
    require:false,
    enum:monthlyIncome
   },
   otherEmployment:{
    type:String,
    require:false,
  },
   greater:{
    type:Number,
    require:false,
  },
   averageAnnualIncome:{
    type:Number,
    require:false,
  },
   nameOfEmployer:{
    type:String,
    require:false,
  },
   profession:{
    type:String,
    require:false,
  },
   positionHeld:{
    type:String,
    require:false,
  },
   personalId: {
    type: mongoose.Types.ObjectId,
    ref: "personal",
  },
})

module.exports = mongoose.model ("employment",employmentSchema)