// app/(auth)/autenticacion/login/actions.ts
'use server';

import {cookies} from 'next/headers';
import {UserService} from '@/lib/db/services/users/user.service';
import {redirect} from 'next/navigation';

const userService = new UserService();
export type LoginState = { success: boolean; error?: string } | null;

export async function loginUser(_prevState: LoginState, formData: FormData) {
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;

    if (!email || !password) {
        return {success: false, error: 'Correo y contraseña son obligatorios.'};
    }

    const result = await userService.login(email, password);

    if (!result.success || !result.data?.token || !result.data.user) {
        return {success: false, error: 'Credenciales inválidas.'};
    }

    const {token, user} = result.data;

    const cookieStore = await cookies();
    cookieStore.set('auth-token', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        path: '/',
        maxAge: 60 * 60 * 24, // 1 día
    });

    // Si tiene suscripción activa, redirigir a panel
    if (user.subscription?.id) {
        redirect('/panel-administrativo');
    }

    // Si no, redirigir al paso de precios
    redirect('/precios');
}
