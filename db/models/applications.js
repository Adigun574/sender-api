const mongoose = require('mongoose')
const db = require('../../environment/index')

mongoose.connect(db.dbUri, { useNewUrlParser:true, useUnifiedTopology: true })
.then(res=>{console.log('connected to db5')})
.catch(err=>{console.log('error connecting to the db5',err)})

const applicationSchema = new mongoose.Schema({
    applicantEmail:String,
    jobId:String,
    status:String,
    applicant:Object
})

const Application = new mongoose.model('Application', applicationSchema)

module.exports = Application