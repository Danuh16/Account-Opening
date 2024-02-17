const mongoose = require('mongoose')
const Schema = mongoose.Schema



const forDisablesSchema = new Schema({
    agree:{
        type:Boolean,
        require:false
    },
    date:{
        type:date,
        require:false
    },
    interpreterName:{
        type:String,
        require:false
    },
    interpreterAddress:{
        type:String,
        require:false
    },
    telephoneNumber:{
        type:Number,
        require:false
    },
    entryDate:{type:Date, defualt:Date.now},
    personalId: {
        type: mongoose.Types.ObjectId,
        ref: "personal",
      },
})






module.exports  = mongoose.model("forDisables",forDisablesSchema)