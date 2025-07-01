"use client";

import React from 'react';
import Link from "next/link";
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {Register, RegisterSchema} from "@/lib/schemas/register.schema";
import {toast} from "react-toastify";
import {Input} from "@/components/ui/input";
import {REGISTER_DATAFORM} from "@/lib/data/register-form.data";
import {Button} from "@/components/ui/button";

const RegisterForm = () => {

    const form = useForm<Register>({
        resolver: zodResolver(RegisterSchema),
        defaultValues: {
            username: '',
            email: '',
            password: '',
            confirmPassword: '',
        }
    })

    const onSubmit = (data: Register) => {
        toast("Form submitted successfully!");
        console.log(data);
    }

    return (
        <>
            <div className="flex flex-col items-center gap-1 text-center mb-4">
                <h1 className="text-2xl font-bold">Register your new account</h1>
                <p className="text-muted-foreground text-sm text-balance">
                    fill the form to register to the platform.
                </p>
                <p className="text-muted-foreground text-sm text-balance">Already have an account? <Link
                    href="/autenticacion/ingresar"
                    className='ml-auto text-sm underline-offset-4 hover:underline'>login
                    here</Link></p>
            </div>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}>
                    <div className="grid gap-4">

                        {REGISTER_DATAFORM.map(data => (
                            <FormField
                                key={data.name}
                                control={form.control}
                                render={
                                    ({field}) => (
                                        <FormItem>
                                            <FormLabel>
                                                {data.label}
                                            </FormLabel>
                                            <FormControl>
                                                <Input placeholder={data.placeholder} {...field} />
                                            </FormControl>
                                            <FormMessage/>
                                        </FormItem>
                                    )
                                } name={data.name}/>
                        ))}
                        <Button type={'submit'}>Registrar</Button>
                    </div>
                </form>
            </Form>
        </>
    );
};

export default RegisterForm;