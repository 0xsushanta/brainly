import { z } from "zod";
export const signupValidator=z.object({
    username:z.string().min(3,"Username must be at least 3 characters").max(20, "Username must be at most 20 characters"),
    password:z.string().min(6,"Password must be at least 6 characters").max(20,"Password must be at least 20 characters")
})
export type SignupInput=z.infer<typeof signupValidator>