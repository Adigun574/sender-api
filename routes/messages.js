const express = require('express')
const router = express.Router()
const messagesController = require('../controllers/messagesController')


router.get('/',(req,res)=>{
    res.send('messages endpoint')
})

router.post('/sendmessage',(req,res)=>{
    messagesController.SendMessage(req,res)
})

router.post('/getmessagesbyrecipientemail',(req,res)=>{
    messagesController.GetAllMessagesByRecepientEmail(req,res)
})


module.exports = router