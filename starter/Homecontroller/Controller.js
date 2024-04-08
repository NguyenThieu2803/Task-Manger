const Task = require('../model/TASK')
const asyncWrapper = require("../middleware/async")
const { createCustomError } = require("../errror/custom-error")



const getAllTask = asyncWrapper(async (req, res) => {
    const tasks = await Task.find({})
    res.status(201).json({ tasks })
}
)

const CreateTask = asyncWrapper(async (req, res) => {
    const task = await Task.create(req.body)
    res.status(201).json({ tasks })
})


const getTask = asyncWrapper(async (req, res, next) => {
    const { id: taskID } = req.params
    const tass = await Task.findOne({ _id: taskID });
    if (!tasks) {
        return next(createCustomError(`No task with id:  ${taskID}`, 404))
    }
    res.status(200).json({ tasks })
})


const UpdateTask = asyncWrapper(async (req, res) => {

    const { id: taskID } = req.params
    const tasks = await Task.findOneAndUpdate({ _id: taskID }, req.body, {
        new: true, runValidators: true
    });
    if (!tasks) {
        return next(createCustomError(`No task with id:  ${taskID}`, 404))
    }
    res.status(200).json({ tasks })
}
)


const deleteTask = asyncWrapper(async (req, res) => {
    const { id: taskID } = req.params
    const tasks = await Task.findOneAn({ _id: taskID });
    if (!tasks) {
        return res.status(404).json({ msg: `No task with id:  ${taskID}` })
    }
    res.status(200).json({ tasks, status: "Success!" })
})
const GetTaskEdit=(req,res)=>{
}
// const editTask= async(req,res)=>{
//     try {
//         const { id: taskID } = req.params
//         const task = await Task.findOneAndUpdate({ _id: taskID }, req.body, {
//             new: true, runValidators: true,overwrite:true
//         });
//         if (!task) {
//             return res.status(404).json({ msg: `No task with id:  ${taskID}` })
//         }
//         res.status(200).json({ task })
//     } catch (error) {
//         res.status(500).json({ msg: error })
//     }
// }

module.exports = {
    getAllTask, CreateTask, getTask, UpdateTask, deleteTask
}