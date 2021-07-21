import { Application } from "oak";

import { errorHandler } from "./http/middlewares/errorHandler.ts";
import { debug } from "./http/middlewares/debug.ts";

import { infraRouter } from "../modules/infra/http/routes/infra.routes.ts";
import { usersRouter } from "../modules/users/http/routes/users.routes.ts";

const app = new Application();

app.addEventListener("listen", () => {
  console.log("Server is online, 8000 is the magic port");
});

if (Deno.env.get("NODE_ENV") === "development") {
  app.use(debug);
}

app.use(errorHandler);
app.use(infraRouter.routes());
app.use(usersRouter.routes());

app.listen({
  port: 8000,
});
