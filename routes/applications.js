const express = require('express')
const router = express.Router()
const applicationsController = require('../controllers/applicationsController')


router.get('/',(req,res)=>{
    res.send('application')
})

router.post('/add',(req,res)=>{
    applicationsController.PostApplication(req,res)
})

router.get('/getbyjobid/:id',(req,res)=>{
    applicationsController.GetApplicationByJobId(req,res)
})

module.exports = router
