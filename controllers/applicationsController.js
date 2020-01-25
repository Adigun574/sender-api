const Application = require('../db/models/applications')

module.exports = class JobsController{
    static async PostApplication(req,res){
        const { applicantEmail, jobId, status, applicant} = req.body
        try{
            const newApplication = new Application({
                applicantEmail,
                jobId,
                status,
                applicant
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
        const {_id, status} = req.body
        console.log('request body',req.body)
        try{
            // console.log(_id)
            // console.log('request body',req.body)
        await Application.findOneAndUpdate({_id:_id}, {$set: req.body}, {useFindAndModify:false})
        return(
            res.status(200).json({success:true, msg:'application editted'})
        )
        }
        catch(err){
            return(
                res.status(500).json({success:false, msg:'something went wrong'})
            )
        }
    }

    static async GetApplicationByApplicantEmail(req,res){
        const { email } = req.params
        try{
            const response = await Application.find({applicantEmail:email})
            console.log('applicants Application',response)
            return(
                res.status(200).json({success:true, data:response})
            )
        }
        catch(err){
            return(
                res.status(500).json({success:false, msg:'something went wrong'})
            )
        }
    }
}