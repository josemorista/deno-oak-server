import { Router } from "oak";

const infraRouter = new Router({
  prefix: "/infra",
});

infraRouter.get("/healthcheck", (ctx) => {
  ctx.response.status = 200;
  ctx.response.body = {
    message: "Hello from healthcheck :)",
  };
});

export { infraRouter };
