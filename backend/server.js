const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
//const cookieParser = require("cookie-parser");
const router = require ('./routes/router')
const bcrypt = require("bcrypt");
const mongoose = require('mongoose');
require('dotenv/config')


const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))

const corsOptions ={
    origin: '*',
    optionSuccessStatus:200
}

//app.use(
   // session({
     // secret: "secretcode",
     // resave: true,
     // saveUninitialized: true,
    //})
  //);
  //app.use(cookieParser());
  //app.use(passport.initialize());
  //app.use(passport.session());




//export route


app.use(cors(corsOptions))
app.use('/',router)
 


const dbOptions={useNewUrlParser:true, useUnifiedTopology: true}
mongoose.set("strictQuery",true)
mongoose.connect(process.env.LOCAL_MONGO_DB,dbOptions)
.then(() => console.log('DB Connected!'))
.catch(err => console.log(err))



const port = process.env.PORT || 4000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})