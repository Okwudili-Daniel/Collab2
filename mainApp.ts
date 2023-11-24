import { Application, Request, Response } from "express";
import task from "./ROUTER/taskRouter"

const mainApp = (app: Application) =>{
    try {
        app.use("api/v1", task)
        app.get("/", (req: Request, res: Response) =>{
            try {
                return res.status(200).json({
                    message: "Welcome"
                })
            } catch (error) {
                return res.status(404).json({
                    message: "Invalid"
                })
            }
        })
    } catch (error) {
        console.log(error)
    }
}

export default mainApp;