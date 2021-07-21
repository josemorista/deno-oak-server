import { Context } from "oak";

export const debug = ((ctx: Context, next: () => Promise<unknown>) => {
  console.log(ctx.request.url.pathname);
  next();
});
