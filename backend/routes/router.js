const express = require("express");
const router = express.Router();
const addressSchema = require("../models/AddressSchema");
const accountSchema = require("../models/AccountTypeSchema");
const employmentSchema = require("../models/EmploymentDetailsSchema");
const personalSchema = require("../models/PersonalSchema");
const accountWithOtherBankSchema =require("../models/AccountWithOtherBankSchema")
const hearSchema = require("../models/HearSchema")
const kinSchema = require("../models/KinSchema")
const meansOfIdentificationSchema = require("../models/MeansOfIdentificationSchema")
const termSchema = require("../models/TermSchema");
const { axios } = require("axios");
const loginSchema = require("../models/loginSchema");
const userSchema = require("../models/userSchema");
const imageUploadSchema = require('../models/imageUploadSchema');
const multer = require("multer");
const {sharp} = require("sharp")


const uploadImage = multer({
  limits: {
  fileSize: 1000000
  },
  fileFilter(req, file, cb) {
  if(!file.originalname.match(/\.(jpg|jpeg|png)$/)) {
  return cb( new Error('Please upload a valid image file'))
  }
  cb(undefined, true)
  }
  })
  

router.post("/form",async (req,res)=>{
  console.log(req.body);
  var random= 10000 + Math.random() * 9999;
  try {
    const params = {
      secret: "a8cf23385c3005260eb3ffc9b3e321ce6096d816",
      mode: device,
      device: "00000000-0000-0000-1c4c-862c63b5e1a0",
      sim: 1,
      priority: 1,
      phone: "+251963010129",
      Message:`your account opening id is ${random}. Please go to the nearest amhara bank branch and active your account.`
    }
    const { title,fullname,martialStatus,otherStatus,placeofbirth,numberofchildren,numberofdependents,mothername,nationality,resident,dateofbirth,purposeofaccount,
            productType, wadiahSafekeeping,amanahCurrent,mudarabahSaving, fycAccount,accountType, otherTypeOfAccount,
            country,region,city,subCity,wereda,houseNo,telNo,email,pOBox,homeType,
            means,otherMean,idNo,issueDateId,expireDate,cardType,electronicBankingPreference,transactionAlertPreference,chequeCategory,preConfirm,
            employment, otherEmployment,monthlyIncome,greater, averageAnnualIncome,nameOfEmployer,profession,positionHeld,
            titles,fullnames,gender,relationship,telNumber,email_k,country_k,region_k,city_k,subCity_k,kebele,houseNo_k,
            amount,bankName,accountNumber,status,
            hear,other,
            agree,date,interpreterName,interpreterAddress,telephoneNumber,
            confirm,} 
    = req.body()
    const newPersonal = new personalSchema({
      title:title,
      fullname:fullname,
      martialStatus:martialStatus,
      otherStatus:otherStatus,
      placeofbirth:placeofbirth,
      numberofchildren:numberofchildren,
      numberofdependents:numberofdependents,
      mothername:mothername,
      nationality:nationality,
      resident:resident,
      dateofbirth:dateofbirth,
      purposeofaccount:purposeofaccount,
    });
    await newPersonal.save();

    const newAccountType = new accountSchema({
      productType:productType, 
      wadiahSafekeeping:wadiahSafekeeping,
      amanahCurrent:amanahCurrent,
      mudarabahSaving:mudarabahSaving, 
      fycAccount:fycAccount,
      accountType:accountType,
      otherTypeOfAccount:otherTypeOfAccount,
      userId:newPersonal.id,
    })
    await newAccountType.save();
    
    const Address = new addressSchema({
      country: country,
      region: region,
      city: city,
      subCity: subCity,
      wereda: wereda,
      houseNo: houseNo,
      telNo: telNo,
      email:email,
      POBox:pOBox,
      homeType:homeType,
      userId:newPersonal.id,
    });
    await Address.save();
    
    const newMeansOfIdentification = new meansOfIdentificationSchema({
      means:means,
      otherMean:otherMean,
      idNo:idNo,
      issueDateId:issueDateId,
      expireDate:expireDate,
      cardType:cardType,
      electronicBankingPreference:electronicBankingPreference,
      transactionAlertPreference:transactionAlertPreference,
      chequeCategory:chequeCategory,
      preConfirm:preConfirm,
      userId:newPersonal.id,
    });
    await newMeansOfIdentification.save();

    const newEmployment = new employmentSchema({
      employment:employment,
      otherEmployment:otherEmployment,
      monthlyIncome: monthlyIncome,
      greater: greater,
      averageAnnualIncome: averageAnnualIncome,
      nameOfEmployer: nameOfEmployer,
      profession: profession,
      positionHeld:positionHeld,
      userId:newPersonal.id,
    });
    await newEmployment.save();
    
    const newKin = new kinSchema({
      titles:titles,
      fullnames:fullnames,
      gender:gender,
      relationship:relationship,
      telNumber:telNumber,
      email_k:email_k,
      country_k:country_k,
      region_k:region_k,
      city_k:city_k,
      subCity_k:subCity_k,
      kebele:kebele,
      houseNo_k:houseNo_k,
      userId:newPersonal.id,
    });
    await newKin.save();
    
    const newAccountWithOtheBank = new accountWithOtherBankSchema({
      amount: amount,
      bankName: bankName,
      accountNumber: accountNumber,
      status:status,
      userId:newPersonal.id,
    });
    await newAccountWithOtheBank.save();
    
    const newHear = new hearSchema({
      hear: hear,
      other: other,
      userId:newPersonal.id,
    });
    await newHear.save();

    const newForDisables = new forDisablesSchema({
      agree: agree,
      date: date,
      interpreterName: interpreterName,
      interpreterAddress: interpreterAddress,
      telephoneNumber: telephoneNumber,
      userId:newPersonal.id,
    });
    await newForDisables.save();

    const newTerm = new termSchema({
      confirm:confirm,
      userId:newPersonal.id,
    })
    await newTerm.save();
    return res.status(200).send("successfully saved")
  } catch (err) {
      return res.status(201).send({
      message:`Error occured ${err.message}`
    })
  }
//await axios ({
  //   post: "get",
  //   url: "https://hahu.io/api/send/sms",
  //   params: {
  //     secret: "a8cf23385c3005260eb3ffc9b3e321ce6096d816",
  //     mode: "devices",
  //     device: "00000000-0000-0000-1c4c-862c63b5e1a0",
  //     sim: 1,
  //     priority: 1,
  //     phone: "telNo",
  //     message: "message",
  //   },
  // });

});






router.post("/uploadImage", uploadImage.single('upload') ,async (req, res) => {
  const body = req.body;
  try {
    await sharp(req.file.buffer).resize({ width: 250, height: 250 }).png().toFile(__dirname + `/images/${req.file.originalname}`)
    res.status(201).send('Image uploaded succesfully')
  } catch (error) {
        console.log(error)
        res.status(400).send(error)
    
  }
  // await axios ({
  //   post: "get",
  //   url: "https://hahu.io/api/send/sms",
  //   params: {
  //     secret: "a8cf23385c3005260eb3ffc9b3e321ce6096d816",
  //     mode: "devices",
  //     device: "00000000-0000-0000-1c4c-862c63b5e1a0",
  //     sim: 1,
  //     priority: 1,
  //     phone: "telNo",
  //     message: "message",
  //   },
  // });
})




router.get("/getAllUser", async (req, res) => {
    try {
      const allUser = await userSchema.find({});
      res.send({ status: "ok", data: allUser });
    } catch (error) {
      console.log(error);
    }
  });
router.post("/userData", async (req,res)=>{
    const {token} = req.body;
    try {
        const user = jwt.verify(token,JWT_SECRET, (err, res) => {
            if (err) {
                return "token expired"
            }
            return res;
        });
        console.log(user);
        if (user == "token expired") {
            return res.send({ status: "error", data: "token expired"});
        }

        const userName = user.username;
        user.findOne({ username: userName }).then((data) => {
            res.send({status: "ok", data: data});
        }).catch((error) => {
            res.send({ status: "error", data: error});
        })
            
    } catch (error) {

    }
});
router.post("/login",async(req,res)=>{
  const{email,password} =req.body;
  const user = await loginSchema.findOne({email});
  if(!user){
    return res.json({error:"user not found"});
  }
  if(await bcrypt.compare(password,user.password)){
    const token = jwt.sign({email:user, JWT_SECRET});
    if(res.status(201)){
      return res.json({status:"ok",data:token});
    }
    else{
      return res.json({error:"error"})
    }
  }
  res.json({status:"error",error:"Invalid password"})
});
router.post("/register",async(req,res)=>{
  const {firstname,lastname,email,password}=req.body;
  const encryptedPassword=await bcrypt.hash(password,10);
  try {
    const oldUser= await userSchema.findOne({email});
    if(oldUser){
     return res.send({error:"User exists"})
    }
    await User.create({
      firstname,
      lastname,
      email,
      password:encryptedPassword,
    })
    res.send({status:"ok"})
  } catch (error) {
    res.send({status:"error"})
  }
})

module.exports = router;

