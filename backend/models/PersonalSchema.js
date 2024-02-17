const mongoose = require('mongoose')
const Schema = mongoose.Schema
const {title,maritalStatus}  = require("../constants/Constants")


const personalSchema = new Schema({
    title:{
        type:String,
        require:false,
        enum:title
    },
    fullname:{
        type:String,
        require:true,
    },
    martialStatus:{
        type:String,
        require:true,
        enum:maritalStatus
    },
    otherStatus:{
        type:String,
        require:false,
    },
    placeOfBirth:{
        type:String,
        require:false,
    },
    numberOfChildren:{
        type:Number,
        require:false,
    },
    nummberOfDependents:{
        type:Number,
        require:false,
    },
    motherName:{
        type:String,
        require:true,
    },
    nationality:{
        type:String,
        require:true,
    },
    residentPermitNo:{
        type:Number,
        require:false,
    },
    dateOfBirth:{
        type:Date,
        require:true,
    },
    purpose:{
        type:String,
        require:false,
    },
    entryDate:{type:Date, defualt:Date.now}

})

module.exports = mongoose.model("personal",personalSchema)