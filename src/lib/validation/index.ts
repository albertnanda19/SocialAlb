import * as z from "zod";

export const SignUpValidation = z.object({
  name: z.string().min(2, { message: "Terlalu pendek" }),
  username: z.string().min(2, { message: "Terlalu pendek" }),
  email: z.string().email(),
  password: z.string().min(8, { message: "Password setidaknya 8 karakter." }),
});
