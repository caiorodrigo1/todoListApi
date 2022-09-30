import { Router } from "express";

import { tasksRoutes } from "./tasks.routes";
import { usersRoutes } from "./users.routes";

const router = Router();

router.use("/tasks", tasksRoutes);

router.use("/users", usersRoutes);

export { router };
