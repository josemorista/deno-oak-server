import { User } from "./../entities/User.ts";
import { ICreatePersonDTO } from "../dtos/ICreatePersonDTO.ts";
import { Person } from "../entities/Person.ts";

export interface IUsersRepository {
  createPerson(data: ICreatePersonDTO): Promise<Person>;
  findUserByEmail(email: string): Promise<User | undefined>;
  all(page: number): Promise<Array<User>>;
}
