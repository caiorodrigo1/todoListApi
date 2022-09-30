import "reflect-metadata";
import { DataSource } from "typeorm";
import { Task } from "../modules/Tasks/entities/Task";
import { User } from "../modules/Users/entities/User";
import { CreateTasksTable1664386626447 } from "./migrations/1664386626447-CreateTasksTable";
import { CreateUsersTable1664541361965 } from "./migrations/1664541361965-CreateUsersTable";

const AppDataSource = new DataSource({
  type: "postgres",
  host: "db",
  port: 5432,
  username: "postgres",
  password: "changeme",
  entities: [Task, User],
  migrations: [CreateTasksTable1664386626447, CreateUsersTable1664541361965],
});

export { AppDataSource };
