const mongoose = require('mongoose')
const db = require('../../environment/index')

mongoose.connect(db.dbUri, { useNewUrlParser:true, useUnifiedTopology: true })
.then(res=>{console.log('connected to db4')})
.catch(err=>{console.log('error connecting to the db4',err)})

const jobSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:String,
    location:String,
    duration:String,
    pay:String,
    requirements:Array,
    type:String,
    posterEmail:String,
    datePosted:String,
    employer:String
})

const Job = new mongoose.model('Job', jobSchema)

module.exports = Job