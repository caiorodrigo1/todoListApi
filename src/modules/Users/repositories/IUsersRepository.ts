import { User } from "../entities/User";

interface ICreateUser {
  name: string;
  email: string;
  password: string;
}

interface IUser {
  id: string;
  name: string;
  email: string;
  password: string;
  created_at: Date;
  updated_at: Date;
}

interface IUsersRepository {
  create({ name, email, password }: ICreateUser): Promise<User>;
  save({
    id,
    name,
    email,
    password,
    created_at,
    updated_at,
  }: IUser): Promise<User>;
  findByEmail(email: string): Promise<User>;
}

export { IUsersRepository, ICreateUser, IUser };
