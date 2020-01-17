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

router.get('/getuserbyemail/:email',(req,res)=>{
    usersController.GetUserByEmail(req,res)
})

module.exports = router