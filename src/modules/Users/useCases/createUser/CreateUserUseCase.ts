import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../shared/errors/AppError";
import { IHashProvider } from "../../providers/HashProvider/IHashProvider";
import {
  ICreateUser,
  IUsersRepository,
} from "../../repositories/IUsersRepository";

@injectable()
class CreateUserUseCase {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository
  ) {}

  async execute({ name, email, password }: ICreateUser): Promise<void> {
    const emailExists = await this.usersRepository.findByEmail(email);

    if (emailExists) {
      throw new AppError("Email already in use.");
    }

    const user = await this.usersRepository.create({
      name,
      email,
      password,
    });

    return user;
  }
}

export { CreateUserUseCase };
