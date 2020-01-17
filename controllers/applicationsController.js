const Application = require('../db/models/applications')

module.exports = class JobsController{
    static async PostApplication(req,res){
        const { applicantEmail, jobId, status} = req.body
        try{
            const newApplication = new Application({
                applicantEmail,
                jobId,
                status
            })
            await newApplication.save()
            return res.status(200).json({success:true, msg:'application posted'})
        }
        catch(err){
            console.log(err)
            return res.status(500).json({success:true, msg:'something went wrong'})
        }
    }

    static async GetApplicationByJobId(req,res){
        const jobId = req.params.id
        try{
            console.log(jobId)
            const response = await Application.find({jobId:jobId})
            console.log(response)
            return res.status(200).json({success:true,data:response})
        }
        catch(err){
            console.log(err)
        }
    }

    static async UpdateApplication(req,res){
        try{

        }
        catch(err){

        }
    }
}