import {z} from "zod";

export const RegisterSchema = z.object({
    username: z.string().min(4, {
        message: "Username must be at least 4 characters long"
    }),
    email: z.string().email("Invalid email address"),
    password: z.string().min(6, "Password must be at least 6 characters"),
    confirmPassword: z.string().min(6, "Confirm password must be at least 6 characters"),
}).refine(data => data.password === data.confirmPassword, {
    message: "Passwords do not match",
})

export type Register = z.infer<typeof RegisterSchema>;