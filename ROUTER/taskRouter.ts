import {Router} from 'express'
import { createTask, viewTask } from '../controller/taskController'

const router:Router = Router()

router.route("/create-task").post(createTask)
router.route("/view-task").get(viewTask)
router.route("/update-task")

export default router 