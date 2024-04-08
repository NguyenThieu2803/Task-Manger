const mongodb=require('mongoose');
const connectDB=(url)=>{
return mongodb.connect(url,{
        useUnifiedTopology: true,
        useNewUrlParser: true,
         useFindAndModify: false
    })
}
module.exports=connectDB