import { container } from "tsyringe";

import { ITasksRepository } from "../../modules/Tasks/repositories/ITasksRepositories";
import { TasksRepository } from "../../modules/Tasks/repositories/implementations/TasksRepositories";
import { IUsersRepository } from "../../modules/Users/repositories/IUsersRepository";
import { UsersRepository } from "../../modules/Users/repositories/implementations/UsersRepository";

container.registerSingleton<ITasksRepository>(
  "TasksRepository",
  TasksRepository
);

container.registerSingleton<IUsersRepository>(
  "UsersRepository",
  UsersRepository
);
