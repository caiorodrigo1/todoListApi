import { Task } from "../entities/Task";

interface ICreateTaskDTO {
  content: string;
  author: string;
}

interface ITasksRepository {
  findByContent(content: string): Promise<Task>;
  findById(id: string): Promise<Task>;
  list(): Promise<Task[]>;
  create({ content, author }: ICreateTaskDTO): Promise<void>;
  remove(task);
  edit();
  markDone();
}

export { ITasksRepository, ICreateTaskDTO };
