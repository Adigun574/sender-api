const Job = require('../db/models/jobs')

module.exports = class JobsController{
    static async PostJob(req,res){
        const { 
            title, description, location, duration, 
            pay, requirements, type, posterEmail, 
            datePosted, employer
        } = req.body
        try{
            const newJob = new Job({
                title, description, location, duration,
                pay, requirements, type, posterEmail,
                datePosted, employer
            })
            await newJob.save()
            return res.status(200).json({success:true, msg:'job posted'})            
        }
        catch(err){
            console.log(err)
            return res.status(500).json({success:true, msg:'something went wrong'})
        }
    }
    static async GetAllJobs(req,res){
        console.log('getalljobs')
        try{
            const response = await Job.find({})
            console.log(response)
            return res.status(200).json({success:true,data:response})
        }
        catch(err){
            console.log(err)
        }
    }
    static async GetOneJob(req,res){
        console.log('getonejob')
    }
    static async EditJob(req,res){
        console.log('editjob')
    }
    static async GetJobByPosterEmail(req,res){
        const posterEmail  = req.params.email
        try{
            const jobs = await Job.find({posterEmail})
            console.log(jobs)
            return res.status(200).json({success:true, data:jobs})            
        }
        catch(err){
            console.log(err)
            return res.status(500).json({success:false, msg:'something went wrong'})
        }
    }
}
