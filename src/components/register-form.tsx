'use client';

import React, {useActionState} from 'react';
import {registerUser} from '@/app/actions/register';
import Link from 'next/link';
import {Button} from '@/components/ui/button';
import {Input} from '@/components/ui/input';

export default function RegisterForm() {
    const [state, formAction] = useActionState(registerUser, {success: false, error: ''});

    return (
        <>
            <div className="flex flex-col items-center gap-1 text-center mb-4">
                <h1 className="text-2xl font-bold">Regístrate</h1>
                <p className="text-muted-foreground text-sm text-balance">
                    Llena el formulario para crear tu cuenta.
                </p>
                <p className="text-muted-foreground text-sm text-balance">
                    ¿Ya tienes una cuenta?{' '}
                    <Link href="/autenticacion/ingresar" className="ml-auto text-sm underline-offset-4 hover:underline">
                        Inicia sesión aquí
                    </Link>
                </p>
            </div>

            <form action={formAction} className="grid gap-4">
                <div>
                    <label className="block mb-1" htmlFor="username">Nombre de Usuario</label>
                    <Input id="username" name="username" required placeholder="Ingresa tu nombre de usuario"/>
                </div>

                <div>
                    <label className="block mb-1" htmlFor="email">Correo Electrónico</label>
                    <Input id="email" name="email" required placeholder="Ingresa tu correo"/>
                </div>

                <div>
                    <label className="block mb-1" htmlFor="password">Contraseña</label>
                    <Input id="password" name="password" type="password" required placeholder="Ingresa tu contraseña"/>
                </div>

                <div>
                    <label className="block mb-1" htmlFor="confirmPassword">Confirmar Contraseña</label>
                    <Input id="confirmPassword" name="confirmPassword" type="password" required
                           placeholder="Repite tu contraseña"/>
                </div>

                <div>
                    <label className="block mb-1" htmlFor="organizationName">Nombre de la Organización</label>
                    <Input id="organizationName" name="organizationName" required
                           placeholder="Nombre de tu organización"/>
                </div>

                {state?.error && <p className="text-red-500 text-sm">{state.error}</p>}

                <Button type="submit" className="w-full">Registrar</Button>
            </form>
        </>
    );
}
