import { UsersRepository } from "./../../repositories/implementations/UsersRepository.ts";
import { CreatePersonUseCase } from "./CreatePersonUseCase.ts";
import { Context } from "oak";

const usersRepository = new UsersRepository();

export class CreateUserController {
  static async handle(ctx: Context): Promise<void> {
    const { email, password, firstname, lastname, type } = await ctx.request
      .body({
        type: "json",
      }).value;

    if (type === "person") {
      (await new CreatePersonUseCase(usersRepository).execute({
        email,
        password,
        firstname,
        lastname,
      }));
    }

    ctx.response.status = 201;
  }
}
