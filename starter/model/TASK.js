const monggoose=require('mongoose')




const TaskSchema=new monggoose.Schema({
    name:{
        type:String,
        required:[true,"Must provide name"],
        trim:true,
        maxlength:[20,"name can not be more than 20 characters"]
    },
    complete:{
        type:Boolean,
        default:false
    }
})
module.exports=monggoose.model('TASK',TaskSchema)