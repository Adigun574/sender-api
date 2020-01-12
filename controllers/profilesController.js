const Profile = require('../db/models/profiles')

module.exports = class ProfileController{
    static async CreateProfile(req,res){
        const { 
            userName, email, firstName, lastName,
            jobTitle, location, rating, phone,
            address, linkedin, whatsapp, birthday,
            gender, skills, jobDescription, sellYourself
        } = req.body
        try{
            const newProfile = new Profile({
                userName, email, firstName, lastName,
                jobTitle:null, location:null, rating:null, phone:null,
                address:null, linkedin:null, whatsapp:null, birthday:null,
                gender:null, skills:null, jobDescription:null, sellYourself:null
            })
            await newProfile.save()
            return (
                res.status(200).json({success:true, msg:'profile created'})
            )

        }
        catch(err){
            return(
                res.status(500).json({success:false, msg:'something went wrong'})
            )
        }
    }

    static async EditProfile(req,res){
        const { 
            userName, email, firstName, lastName,
            jobTitle, location, rating, phone,
            address, linkedin, whatsapp, birthday,
            gender, skills, jobDescription, sellYourself
        } = req.body
        try{
        const profileToUpdate = new Profile({
            userName, email, firstName, lastName,
            jobTitle:null, location:null, rating:null, phone:null,
            address:null, linkedin:null, whatsapp:null, birthday:null,
            gender:null, skills:null, jobDescription:null, sellYourself:null
        })
        await Profile.findOneAndUpdate({email:req.body.email}, {$set: req.body}, {useFindAndModify:false})
        return(
                res.status(200).json({success:true, msg:'profile editted'})
        )
        }
        catch(err){
            return(
                res.status(500).json({success:false, msg:'something went wrong'})
            )
        }
    }

    static async GetOneProfile(req,res){
        const { email } = req.body
        try{
            const response = await Profile.findOne({email})
            return(
                res.status(200).json({success:true, msg:response})
            )
        }
        catch(err){

        }
    }
}