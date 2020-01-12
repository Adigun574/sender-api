const User = require('../db/models/users')
const Profile = require('../db/models/profiles')
const bcrypt = require ('bcryptjs')

module.exports = class UsersController{
    static async registerUser(req, res){
        const { userName, email, firstName, lastName, password} = req.body
        try{
            const newUser = new User({
                userName,
                email,
                firstName,
                lastName,
                password
            })
            const newProfile = new Profile({
                userName, email, firstName, lastName,
                jobTitle:null, location:null, rating:null, phone:null,
                address:null, linkedin:null, whatsapp:null, birthday:null,
                gender:null, skills:null
            })
            const salt = await bcrypt.genSalt()
            const hashedPassword = await bcrypt.hash(newUser.password,salt)
            newUser.password = await hashedPassword
            const oneUser = await User.find({email})
            if (oneUser.length === 0){
                await newUser.save()
                await newProfile.save()
                return (
                        res.status(200).json({success:true, msg:"user registered"})                        
                )
            }
            else{
                return (
                        res.status(500).json({success:false, msg:"email exists"})    
                )
            }
            
        }
        catch(err){
            return (
                    res.status(500).json({success:false, msg:"registration failed"})
            )
        }
    }

    static async authenticateUser(req,res){
        const { email, password} = req.body
        try{
            const oneUser = await User.find({email})
            if(oneUser.length===0){
                return (
                        res.status(404).json({success:false, msg:"user not found"})
                )
            }
            else{
                const passwordsMatch = await bcrypt.compare(password, oneUser[0].password)
                if(passwordsMatch){
                    return(
                        res.status(200).json({success:true, msg:oneUser[0]})
                    )
                }
                else{
                    return(
                        res.status(404).json({success:false, msg:"user not authenticated"})
                    )
                }
            }
        }
        catch(err){
            return (
                    res.status(500).json({success:false, msg:"soemthing went wrong"})
            )
        }
    }
}