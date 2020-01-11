const mongoose = require('mongoose')
const db = require('../../environment/index')

mongoose.connect(db.dbUri, { useNewUrlParser:true, useUnifiedTopology: true })
.then(res=>{console.log('connected to db2')})
.catch(err=>{console.log('error connecting to the db2',err)})

const userSchema = new mongoose.Schema({
    userName:{
        type: String,
        required: true
    },
    firstName:{
        type: String,
        required: true
    },
    lastName:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    }
})

const User = new mongoose.model('User', userSchema);

module.exports = User