import { z } from "zod";

const errMsj = "El numero debe estar entre 1 y 19";
export const inputSchema = z
  .number()
  .min(1, { message: errMsj })
  .max(19, { message: errMsj });

export type InputType = z.infer<typeof inputSchema>;
