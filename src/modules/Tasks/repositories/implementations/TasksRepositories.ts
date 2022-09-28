import { Repository } from "typeorm";

import { AppDataSource } from "../../../../database/data-source";
import { Task } from "../../entities/Task";
import { ICreateTaskDTO, ITasksRepository } from "../ITasksRepositories";

class TasksRepository implements ITasksRepository {
  private repository: Repository<Task>;

  constructor() {
    this.repository = AppDataSource.getRepository(Task);
  }

  async create({ content, author }: ICreateTaskDTO): Promise<void> {
    const task = this.repository.create({ content, author });

    await this.repository.save(task);
  }

  async list(): Promise<Task[]> {
    const tasks = await this.repository.find();
    return tasks;
  }

  async findByContent(content: string): Promise<Task> {
    const task = await this.repository.findOneBy({ content });

    return task;
  }

  async findById(id: string): Promise<Task> {
    const task = await this.repository.findOne({ id });
    return task;
  }
}

export { TasksRepository };
