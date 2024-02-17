const mongoose = require('mongoose')
const Schema = mongoose.Schemma


const userSchema = new Schema({
    name:{type:String},
    email:{type:String},
    website:{type:String},
    entryDate:{type:Date, defualt:Date.now}
})




const Users = mongoose.model('Users',userSchema, 'users')
const Account = mongoose.model('Account',accountSchema, 'account')
const Personal = mongoose.model('Personal',personalSchema,'personal')
const Address = mongoose.model('Address',addressSchema,'address')
const Means = mongoose.model('Means',meansSchema,'means')
const Employment= mongoose.model('Employment',employmentSchema,'employment')
const Kin = mongoose.model('Kin',kinSchema, 'kin')

const myschemas = {
    'Users':Users,
    'Account':Account,
    'Personal':personalSchema,
    'Address':adressSchema,
    'Means':meansSchema,
    'Employment':employmentSchema,
    'Kin':kinSchema,
    
}



module.exports = myschemas