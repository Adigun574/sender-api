const mongoose = require('mongoose')
const db = require('../../environment/index')

mongoose.connect(db.dbUri, { useNewUrlParser:true, useUnifiedTopology: true })
.then(res=>{console.log('connected to db6')})
.catch(err=>{console.log('error connecting to the db6',err)})

const messageSchema = new mongoose.Schema({
    senderUserName:String,
    senderEmail:String,
    message:String,
    receiverEmail:String,
    date:String
})

const Message = new mongoose.model('Message', messageSchema)

module.exports = Message