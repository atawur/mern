const registrationValidator = require('../validator/registrationValidator')

module.exports = {
    async register(req,res){
        return res.status(200).json({
            message:req.body.email
        })
    }
}