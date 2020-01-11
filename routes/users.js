const express = require('express')
const usersController = require('../controllers/usersController')

const router = express.Router()

router.get('/',(req,res)=>{
    res.send('users endpoint')
})

router.post('/register',(req,res)=>{
    usersController.registerUser(req,res)
})

router.post('/authenticate',(req,res)=>{
    usersController.authenticateUser(req,res)
})

module.exports = router