'use client';

import {cn} from "@/lib/utils";
import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {Label} from "@/components/ui/label";
import Link from "next/link";
import {loginUser} from "@/app/actions/login";
import {useActionState} from "react";

export function LoginForm({className, ...props}: React.ComponentProps<"form">) {
    const [state, formAction] = useActionState(loginUser, null);

    return (
        <form action={formAction} className={cn("flex flex-col gap-6", className)} {...props}>
            <div className="flex flex-col items-center gap-2 text-center">
                <h1 className="text-2xl font-bold">Inicia sesión</h1>
                <p className="text-muted-foreground text-sm text-balance">
                    Ingresa tu correo y contraseña para acceder a tu cuenta.
                </p>
                {state?.error && <p className="text-red-500 text-sm mt-2">{state.error}</p>}
            </div>

            <div className="grid gap-6">
                <div className="grid gap-3">
                    <Label htmlFor="email">Correo electrónico</Label>
                    <Input id="email" name="email" type="email" placeholder="tucorreo@ejemplo.com" required/>
                </div>
                <div className="grid gap-3">
                    <div className="flex items-center">
                        <Label htmlFor="password">Contraseña</Label>
                        <Link
                            href="#"
                            className="ml-auto text-sm underline-offset-4 hover:underline"
                        >
                            ¿Olvidaste tu contraseña?
                        </Link>
                    </div>
                    <Input id="password" name="password" type="password" placeholder="••••••••" required/>
                </div>
                <Button type="submit" className="w-full">
                    Iniciar sesión
                </Button>

                {/*<div*/}
                {/*    className="after:border-border relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t">*/}
                {/*    <span className="bg-background text-muted-foreground relative z-10 px-2">*/}
                {/*        o continúa con*/}
                {/*    </span>*/}
                {/*</div>*/}

                {/*<Button variant="outline" className="w-full">*/}
                {/*    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={20} height={20}>*/}
                {/*        <path*/}
                {/*            d="M12 .297c-6.63 0-12 5.373-12 12..."*/}
                {/*            fill="currentColor"*/}
                {/*        />*/}
                {/*    </svg>*/}
                {/*    GitHub*/}
                {/*</Button>*/}
            </div>

            <div className="text-center text-sm">
                ¿No tienes una cuenta?{" "}
                <a href="/autenticacion/registro" className="underline underline-offset-4">
                    Regístrate
                </a>
            </div>
        </form>
    );
}
