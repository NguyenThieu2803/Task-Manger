
const express= require('express');
const app=express();
const routes =require('./router/task');
const connectDB=require('./Database/connect');
require('dotenv').config()
const notFound=require("./middleware/not-found")
const handleError=require("./middleware/handle-error")



//midleware
app.use(express.static('./public'));
app.use(express.json())
//router
app.use('/api/v1/task',routes);
app.use(notFound);
app.use(handleError);




const port=3000;
const start=async()=>{
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port, () => {
    console.log(`Server is listening on port ${port}..`);
  });
    } catch (error) {
        console.log(error);
    }
}
start();
