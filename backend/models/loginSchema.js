const Mongoose = require("mongoose")


const loginSchema = new Mongoose.Schema({
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    minlength: 8,
    required: true,
  },
})

module.exports = Mongoose.model("login", loginSchema);