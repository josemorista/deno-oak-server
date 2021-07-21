import { ICreatePersonDTO } from "./../../dtos/ICreatePersonDTO.ts";
import { IUsersRepository } from "./../../repositories/IUsersRepository.ts";
import { Person } from "../../entities/Person.ts";

export class CreatePersonUseCase {
  constructor(
    private usersRepository: IUsersRepository,
  ) {}

  async execute({ email, ...rest }: ICreatePersonDTO): Promise<Person> {
    if (await this.usersRepository.findUserByEmail(email)) {
      throw new Error("User already exists");
    }
    const person = await this.usersRepository.createPerson({ email, ...rest });
    return person;
  }
}
