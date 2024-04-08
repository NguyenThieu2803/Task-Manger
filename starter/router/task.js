const express= require('express');
const router=express.Router();
const{getAllTask,CreateTask,getTask,UpdateTask,deleteTask}=require('../Homecontroller/Controller');

router.route('/').get(getAllTask).post(CreateTask);
router.route('/:id').get(getTask).patch(UpdateTask).delete(deleteTask);
module.exports=router ;