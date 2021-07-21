import { UsersRepository } from "./../../repositories/implementations/UsersRepository.ts";
import { CreateUserController } from "./../../useCases/CreateUser/CreateUserController.ts";
import { Router } from "oak";

const usersRouter = new Router({
  prefix: "/users",
});

usersRouter.post("/", CreateUserController.handle);
usersRouter.get("/", async (ctx) => {
  ctx.response.body = await (new UsersRepository()).all(
    Number(ctx.request.url.searchParams.get("page") || 0),
  );
});

export { usersRouter };
