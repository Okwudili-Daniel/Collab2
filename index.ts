import { error } from "console";
import cors from "cors";
import express,{Application, Request, Response} from "express";

const port: number = 3222;
const app:Application = express();

app.use(express.json());
app.use(cors());

const server = app.listen(port, ()=>{
    console.log("server up and running")
});

process.on("uncaughtException", (error:Error)=>{
    console.log("uncaughtException",error)
    process.exit(1)
});

process.on("unhandledRejection", (reason:Error)=>{
    
})