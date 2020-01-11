const mongoose = require('mongoose')
const db = require('../../environment/index')

mongoose.connect(db.dbUri, { useNewUrlParser:true, useUnifiedTopology: true })
.then(res=>{console.log('connected to db3')})
.catch(err=>{console.log('error connecting to the db3',err)})

const profileSchema = new mongoose.Schema({
    userName:{
        type:String,
        required:true
    },
    firstName:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required:true
    },
    jobTitle:{
        type:String,
        required:false
    },
    location:{
        type:String,
        required:false
    },
    rating:{
        type:Number,
        required:false
    },
    phone:{
        type:String,
        required:false
    },
    address:{
        type:String,
        required:false
    },
    email:{
        type:String,
        required:false
    },
    linkedin:{
        type:String,
        required:false
    },
    whatsapp:{
        type:String,
        required:false
    },
    birthday:{
        type:String,
        required:false
    },
    gender:{
        type:String,
        required:false
    },
    skills:{
        type:Array,
        required:false
    }
})

const Profile = new mongoose.model('Profile', profileSchema)

module.exports = Profile