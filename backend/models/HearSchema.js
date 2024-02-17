const mongoose = require('mongoose')
const Schema = mongoose.Schema
const {hear}  = require("../constants/Constants")


const hearSchema = new Schema({
    hear:{
        type:Boolean,
        require:false,
        enum:hear
    },
    other:{
        type:String,
        require:false,
    },
    personalId: {
        type: mongoose.Types.ObjectId,
        ref: "personal",
      },
})

module.exports =mongoose.model ("hear",hearSchema)