'use server';

import {UserService} from "@/lib/db/services/users/user.service";
import {cookies} from "next/headers";
import {redirect} from "next/navigation";

const userService = new UserService();

export type RegisterState = { success: boolean; error?: string } | null;

export async function registerUser(_prevState: RegisterState, formData: FormData) {
    const username = formData.get('username') as string;
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;
    const confirmPassword = formData.get('confirmPassword') as string;
    const organizationName = formData.get('organizationName') as string;

    if (!username || !email || !password || !confirmPassword || !organizationName) {
        return {success: false, error: 'Todos los campos son obligatorios.'};
    }

    if (password !== confirmPassword) {
        return {success: false, error: 'Las contraseñas no coinciden.'};
    }

    const result = await userService.register(
        {
            name: username, email,
            password: "",
            avatar: null
        },
        password,
        organizationName
    );

    if (!result.success || !result.data?.token) {
        return {success: false, error: 'Error al registrar el usuario.'};
    }

    // Guardar token en cookie httpOnly
    const cookieStore = await cookies();

    cookieStore.set('auth-token', result.data.token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        path: '/',
        maxAge: 60 * 60 * 24, // 1 día
    });

    // Redirigir a precios
    redirect('/precios');
}
