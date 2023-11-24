import { Request, Response } from "express";


export const createTask = async(req: Request, res:Response)=>{
    try {
        return res.status(201).json({
            message:"Task Created."
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




