import {Router} from 'express'
import { createTask, updateTask, viewOneTask, viewTask } from '../controller/taskController'

const router:Router = Router()

router.route("/create-task").post(createTask)
router.route("/view-task").get(viewTask)
router.route("/view-one-task").get(viewOneTask)
router.route("/update-task").patch(updateTask)

export default router 