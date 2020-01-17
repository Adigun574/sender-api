const express = require('express')
const jobsController = require('../controllers/jobsController')
const router = express.Router()

router.get('/', (req,res)=>{
    res.send('jobs endpoint')
})

router.post('/add', (req,res)=>{
    jobsController.PostJob(req,res)
})

router.get('/getall', (req,res)=>{
    jobsController.GetAllJobs(req,res)
})

router.get('/getone', (req,res)=>{
    jobsController.GetOneJob(req,res)
})

router.post('/edit', (req,res)=>{
    jobsController.EditJob(req,res)
})

router.get('/getjobbyposteremail/:email',(req,res)=>{
    jobsController.GetJobByPosterEmail(req,res)
})

module.exports = router