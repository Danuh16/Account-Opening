const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const imageUploadSchema = new Schema({
  
    image: {
        data:Buffer,
        contentType:String,
    },
    userId:{
        type:Schema.Types.ObjectId,

    },
})
module.exports = mongoose.model("imageUpload", imageUploadSchema);