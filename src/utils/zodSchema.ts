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
export const TabUpdateSchema = z.object({
  title: z.string(),
  count: z.number(),
  countChange: z.string(),
});

export const DeviceDetailsInputFile = z.array(
  z.object({
    name: z.string(),
    value: z.number(),
  })
);

export const LocationWiseDetailsInputFile = z.array(
  z.object({
    name: z.string(),
    value: z.number(),
    color: z.string(),
  })
);

export const UserCountDetailsInputFile = z.array(
  z.object({ name: z.string(), thisYear: z.number(), lastYear: z.number() })
);

export const WebSiteStatDetailsInputFile = z.array(
  z.object({
    name: z.string(),
    traffic: z.enum(["medium", "low", "high"]),
  })
);
