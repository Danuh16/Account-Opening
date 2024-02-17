const mongoose = require('mongoose')
const Schema = mongoose.Schema



const termSchema = new Schema({
    confirm:{
        type:Boolean,
        require:true
    },
    personalId: {
        type: mongoose.Types.ObjectId,
        ref: "personal",
      },
})








module.exports  = mongoose.model("term",termSchema)