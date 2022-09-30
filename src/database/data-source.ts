import "reflect-metadata";
import { DataSource } from "typeorm";

const AppDataSource = new DataSource({
  type: "postgres",
  host: "db",
  port: 5432,
  username: "postgres",
  password: "changeme",
  entities: [
    "src/modules/Tasks/entities/*{.ts,.js}",
    "src/modules/Users/entities/*{.ts,.js}",
  ],
  migrations: ["src/database/migrations/*{.ts,.js}"],
});

export { AppDataSource };
