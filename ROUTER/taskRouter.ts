import {Router} from 'express'
import { createTask, deleteTask, updateTask, viewOneTask, viewTask } from '../controller/taskController'

const router:Router = Router()

router.route("/create-task").post(createTask)
router.route("/view-task").get(viewTask)
router.route("/view-one-task").get(viewOneTask)
router.route("/update-task").patch(updateTask)
router.route("/delete-task").patch(deleteTask)

export default router 