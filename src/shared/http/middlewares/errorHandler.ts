import { Context } from "oak";

export const errorHandler = async (
  ctx: Context,
  next: () => Promise<unknown>,
) => {
  try {
    await next();
  } catch (error) {
    console.error(error.message);
    ctx.response.status = 500;
    ctx.response.body = {
      error: error.message,
    };
  }
};
