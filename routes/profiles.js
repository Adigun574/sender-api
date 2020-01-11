const express = require('express')
const router = express.Router()
const profilesController = require('../controllers/profilesController')


router.get('/',(req,res)=>{
    res.send('profiles endpoint')
})

router.post('/create',(req,res)=>{
    profilesController.CreateProfile(req,res)
})

router.post('/edit',(req,res)=>{
    profilesController.EditProfile(req,res)
})

router.post('/getone',(req,res)=>{
    profilesController.GetOneProfile(req,res)
})

module.exports = router