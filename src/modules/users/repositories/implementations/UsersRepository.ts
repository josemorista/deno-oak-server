import { IUsersRepository } from "../IUsersRepository.ts";
import { Person } from "../../entities/Person.ts";
import { User } from "../../entities/User.ts";
import { ICreatePersonDTO } from "../../dtos/ICreatePersonDTO.ts";

let instance: UsersRepository | null = null;
export class UsersRepository implements IUsersRepository {
  private usersRepository: Array<User>;

  constructor() {
    this.usersRepository = [];
    if (!instance) {
      instance = this;
      return this;
    } else {
      return instance;
    }
  }

  all(page: number): Promise<User[]> {
    const skip = page * 5;
    return new Promise((resolve) =>
      resolve(this.usersRepository.slice(skip, skip + 5))
    );
  }

  findUserByEmail(email: string): Promise<User | undefined> {
    const user = this.usersRepository.find((el) => el.email === email);
    return new Promise((resolve) => resolve(user));
  }

  createPerson(data: ICreatePersonDTO): Promise<Person> {
    const person = new Person({
      ...data,
      type: "person",
      id: this.usersRepository.length + 1,
    });
    this.usersRepository.push(person);
    return new Promise((resolve) => resolve(person));
  }
}
