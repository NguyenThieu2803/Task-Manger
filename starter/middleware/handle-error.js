const { CustomAPIError } = require("../errror/custom-error")

const handleError=(err,req,res,next)=>{
    if(err instanceof CustomAPIError){
        return res.status(err.statusCode).json({msg:err.message})
    }
return res.status((500)).json({msg:'Some thing went wrong, please try again'})
}
module.exports=handleError