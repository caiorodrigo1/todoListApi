import { Router } from "express";

import { CreateTaskController } from "../modules/Tasks/useCases/createTask/CreateTaskController";
import { ListTasksController } from "../modules/Tasks/useCases/listTasks/ListTasksController";

const tasksRoutes = Router();

const createTaskController = new CreateTaskController();
const listTasksController = new ListTasksController();

tasksRoutes.post("/", createTaskController.handle);

tasksRoutes.get("/", listTasksController.handle);

export { tasksRoutes };
