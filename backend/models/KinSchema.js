const mongoose = require('mongoose')
const Schema = mongoose.Schema
const {titles,gender}  = require("../constants/Constants")



const kinSchema = new Schema({
    titles:{
        type:String,
        require:false,
        enum:titles
    },
    fullnames:{
        type:String,
        require:false
    },
    dateOfBirth:{
        type:Date,
        require:false
    },
    gender:{
        type:String,
        require:false,
        enum:gender
    },
    relationship:{
        type:String,
        require:false
    },
    telNumber:{
        type:Number,
        require:false
    },
    email:{
        type:String,
        require:false,
    },
    country_k:{
        type:String,
        require:false,
    },
    region_k:{
        type:String,
        require:false,
    },
    city_k:{
        type:String,
        require:false,
    },
    subCity_k:{
        type:String,
        require:false,
    },
    kebele:{
        type:Number,
        require:false,
    },
    houseNo_k:{
        type:Number,
        require:false,
    },
    personalId: {
        type: mongoose.Types.ObjectId,
        ref: "personal",
      },
})

module.exports  = mongoose.model("kin",kinSchema)