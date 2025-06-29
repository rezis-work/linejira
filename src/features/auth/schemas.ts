import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().email().trim().min(1, { message: "Email is required" }),
  password: z
    .string()
    .min(1, { message: "Password is required" })
    .max(256, { message: "Password must be less than 256 characters" }),
});

export const signUpSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  email: z.string().email().trim().min(1, { message: "Email is required" }),
  password: z
    .string()
    .min(8, { message: "Passwod must be at leas 8 characters" })
    .max(256, { message: "Password must be less than 256 characters" }),
});
