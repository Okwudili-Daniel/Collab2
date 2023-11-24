import { model, Schema, Document } from "mongoose"

interface iTask {
    task: string,
    deadline: string,
    done: boolean,
}

interface ITaskdata extends iTask, Document { }
const TaskModel = new Schema<ITaskdata>({
    task: {
        types: String
    },
    deadline: {
        types: Number
    },
    done: {
        types: Boolean
    },

},

    { timestamps: true }

)


export default model<ITaskdata>("task", TaskModel)