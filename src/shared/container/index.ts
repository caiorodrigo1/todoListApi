import { container } from "tsyringe";

import { ITasksRepository } from "../../modules/Tasks/repositories/ITasksRepositories";
import { TasksRepository } from "../../modules/Tasks/repositories/implementations/TasksRepositories";

container.registerSingleton<ITasksRepository>(
  "TasksRepository",
  TasksRepository
);
