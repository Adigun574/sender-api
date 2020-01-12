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
    }
    static async GetOneJob(req,res){
        console.log('getonejob')
    }
    static async EditJob(req,res){
        console.log('editjob')
    }
}
