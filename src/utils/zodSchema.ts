import { z } from "zod";

export const authSchema = z.object({
  userName: z
    .string()
    .regex(
      /^[a-z][a-z0-9_]*$/,
      "Username must start with a lowercase letter and can only contain lowercase letters, numbers, and underscores."
    )
    .max(50, "Id Can not exceed 100 characters"),
  password: z.string().min(6, "Password must be at least 6 characters long."),
  type: z.enum(["register", "login"]),
});
