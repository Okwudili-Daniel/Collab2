import { Request, Response } from "express";
import TaskModel from "../TaskModel";


export const createTask = async(req: Request, res:Response)=>{
    try {

        const {task, deadline, done} = req.body;

        const user = await TaskModel.create({
            task,
            deadline,
            done
        })
        return res.status(201).json({
            message:"Task Created.",
            data: user
        })
    } catch (error) {
        return res.status(404).json({
            message:"error"
        })
    }
}


export const viewTask = async(req: Request, res:Response)=>{
    try {
        return res.status(200).json({
            message:"success in viewing"
        })
    } catch (error) {
        return res.status(404).json({
            message:"error"
        })
    }
    
};

export const viewOneTask = async(req: Request, res:Response)=>{
    try {

        const { userID} = req.params

        const user = await TaskModel.findById({userID})

        return res.status(200).json({
            message:"success in viewing one task",
            data: user
        })
    } catch (error) {
        return res.status(404).json({
            message:"error"
        })
    }
    
};

export const updateTask = async(req: Request, res:Response)=>{
    try {

        const { userID} = req.params

        const user = await TaskModel.findById({userID})

        return res.status(200).json({
            message:"success in viewing one task",
            data: user
        })
    } catch (error) {
        return res.status(404).json({
            message:"error"
        })
    }
    
};




