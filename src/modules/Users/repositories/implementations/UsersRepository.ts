import { Repository } from "typeorm";
import { AppDataSource } from "../../../../database/data-source";
import { User } from "../../entities/User";
import { ICreateUser, IUser, IUsersRepository } from "../IUsersRepository";

class UsersRepository implements IUsersRepository {
  private repository: Repository<User>;

  constructor() {
    this.repository = AppDataSource.getRepository(User);
  }

  async create({ name, email, password }: ICreateUser): Promise<void> {
    const user = this.repository.create({ name, email, password });

    await this.repository.save(user);
  }

  async save({
    id,
    name,
    email,
    password,
    created_at,
    updated_at,
  }: IUser): Promise<User> {
    await this.repository.save(user);

    return user;
  }

  async findByEmail(email: string): Promise<User> {
    const user = await this.repository.findOneBy(email);

    return user;
  }
}

export { UsersRepository };
