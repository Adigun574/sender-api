const Message = require('../db/models/messages')

module.exports = class MessagesController{
    static async SendMessage(req,res){
        const {
            senderUserName, senderEmail, message, receiverEmail, date
        } = req.body
        try{
            const newMessage = new Message({
                senderUserName, senderEmail, message, receiverEmail, date
            })
            await newMessage.save()
            return res.status(200).json({success:true, msg:'message sent'})            
        }
        catch(err){
            console.log(err)
            return res.status(500).json({success:true, msg:'something went wrong'})
        }
    }
    static async GetAllMessagesByRecepientEmail(req,res){
        try{
            const response = await Message.find({receiverEmail:req.body.receiverEmail})
            console.log(response)
            return res.status(200).json({success:true,data:response})
        }
        catch(err){
            console.log(err)
        }
    }
}
