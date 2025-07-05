'use client';
import React, {useEffect, useState} from 'react';
import {useRouter} from 'next/navigation';
import {clearSelectedPlan, getSelectedPlan, isLoggedIn} from '@/lib/utils';
import {Card, CardContent, CardFooter, CardHeader, CardTitle} from '@/components/ui/card';
import {Input} from '@/components/ui/input';
import {Label} from '@/components/ui/label';
import {RadioGroup, RadioGroupItem} from '@/components/ui/radio-group';
import {Checkbox} from '@/components/ui/checkbox';
import {Separator} from '@/components/ui/separator';
import {Progress} from '@/components/ui/progress';
import {Badge} from '@/components/ui/badge';
import {Button} from '@/components/ui/button';

interface Plan {
    id: string;
    name: string;
    description: string;
    price: number;
    duration: number;
}

const CheckoutPage = () => {
    const router = useRouter();
    const [plan, setPlan] = useState<Plan | null>(null);
    const [isAnnual, setIsAnnual] = useState(false);
    const [progress] = useState(66);

    useEffect(() => {
        // 1️⃣ Autenticación
        if (!isLoggedIn()) {
            router.push('/autenticacion/registro');
            return;
        }

        // 2️⃣ Recupera el ID seleccionado
        const selectedId = getSelectedPlan();
        if (!selectedId) {
            router.push('/precios');
            return;
        }

        // 3️⃣ Fetch al backend para obtener datos del plan
        fetch(`/api/subscriptions/${selectedId}`)
            .then(res => res.json())
            .then(json => {
                if (json.success) {
                    setPlan(json.data);
                } else {
                    router.push('/precios');
                }
            })
            .catch(() => router.push('/precios'));
    }, [router]);

    if (!plan) {
        return <p className="text-center py-12">Cargando checkout...</p>;
    }

    // Cálculo de precio
    const monthly = plan.price;
    const annual = parseFloat((plan.price * 12 * 0.8).toFixed(2));

    return (
        <div className="max-w-6xl mx-auto px-4 py-12">
            <div className="mb-8">
                <Progress value={progress} colorIndicator="bg-indigo-600" className="h-2 bg-gray-200"/>
                <div className="flex justify-between mt-2 text-sm text-gray-600">
                    <span className={progress >= 25 ? 'text-indigo-600 font-medium' : ''}>Información personal</span>
                    <span className={progress >= 50 ? 'text-indigo-600 font-medium' : ''}>Método de pago</span>
                    <span>Confirmación</span>
                </div>
            </div>

            <div className="grid md:grid-cols-5 gap-8">
                {/* Left: Form */}
                <div className="md:col-span-3 space-y-6">
                    {/* Información Personal */}
                    <Card>
                        <CardHeader>
                            <CardTitle>Información Personal</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <Label htmlFor="firstName">Nombre</Label>
                                    <Input id="firstName" placeholder="Tu nombre"/>
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="lastName">Apellidos</Label>
                                    <Input id="lastName" placeholder="Tus apellidos"/>
                                </div>
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="email">Correo electrónico</Label>
                                <Input id="email" type="email" placeholder="tu@email.com"/>
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="company">Empresa (opcional)</Label>
                                <Input id="company" placeholder="Nombre de tu empresa"/>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Información de Facturación */}
                    <Card>
                        <CardHeader>
                            <CardTitle>Información de Facturación</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="space-y-2">
                                <Label htmlFor="address">Dirección</Label>
                                <Input id="address" placeholder="Calle, número, piso..."/>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <Label htmlFor="city">Ciudad</Label>
                                    <Input id="city" placeholder="Tu ciudad"/>
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="postalCode">Código Postal</Label>
                                    <Input id="postalCode" placeholder="12345"/>
                                </div>
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="country">País</Label>
                                <Input id="country" placeholder="Venezuela"/>
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="taxId">RIF/Cédula (opcional)</Label>
                                <Input id="taxId" placeholder="Para facturación"/>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Método de Pago */}
                    <Card>
                        <CardHeader>
                            <CardTitle>Método de Pago</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <RadioGroup defaultValue="card" className="space-y-3">
                                {['card', 'paypal', 'transfer'].map(method => (
                                    <div
                                        key={method}
                                        className="flex items-center space-x-3 border rounded-lg p-4 hover:border-indigo-400 transition-colors"
                                    >
                                        <RadioGroupItem value={method} id={method}/>
                                        <Label htmlFor={method} className="flex-1 cursor-pointer">
                                            {method === 'card'
                                                ? 'Tarjeta de crédito'
                                                : method === 'paypal'
                                                    ? 'PayPal'
                                                    : 'Transferencia bancaria'}
                                        </Label>
                                    </div>
                                ))}
                            </RadioGroup>

                            {/* Detalles de Tarjeta */}
                            <div className="mt-6 space-y-4">
                                <div className="space-y-2">
                                    <Label htmlFor="cardNumber">Número de tarjeta</Label>
                                    <Input id="cardNumber" placeholder="1234 5678 9012 3456"/>
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <Label htmlFor="expiry">Fecha de caducidad</Label>
                                        <Input id="expiry" placeholder="MM/AA"/>
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="cvc">CVC</Label>
                                        <Input id="cvc" placeholder="123"/>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* Right: Resumen */}
                <div className="md:col-span-2">
                    <div className="sticky top-20">
                        <Card>
                            <CardHeader>
                                <CardTitle>Resumen del Pedido</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="bg-indigo-50 p-4 rounded-lg">
                                    <div className="flex justify-between items-center mb-2">
                                        <span className="font-medium">Plan {plan.name}</span>
                                        <Badge className="bg-indigo-100 text-indigo-800">
                                            {isAnnual ? 'Anual' : 'Mensual'}
                                        </Badge>
                                    </div>
                                    <div className="text-right font-medium">
                                        {isAnnual ? `${annual.toFixed(2)}€` : `${monthly.toFixed(2)}€`}
                                    </div>
                                </div>

                                <div className="space-y-3">
                                    <div className="flex justify-between text-sm">
                                        <span>Subtotal</span>
                                        <span>{isAnnual ? `${annual.toFixed(2)}€` : `${monthly.toFixed(2)}€`}</span>
                                    </div>
                                    <div className="flex justify-between text-sm">
                                        <span>IVA (16%)</span>
                                        <span>
                      {isAnnual
                          ? `${(annual * 0.16).toFixed(2)}€`
                          : `${(monthly * 0.16).toFixed(2)}€`}
                    </span>
                                    </div>
                                    <Separator/>
                                    <div className="flex justify-between font-bold">
                                        <span>Total</span>
                                        <span>
                      {isAnnual
                          ? `${(annual * 1.16).toFixed(2)}€`
                          : `${(monthly * 1.16).toFixed(2)}€`}
                    </span>
                                    </div>
                                </div>

                                <div className="flex items-center space-x-2 pt-4">
                                    <Input placeholder="Código promocional"/>
                                    <Button variant="outline" className="rounded-full">
                                        Aplicar
                                    </Button>
                                </div>

                                <div className="space-y-4 pt-4">
                                    <div className="flex items-start space-x-3">
                                        <Checkbox id="terms"/>
                                        <Label htmlFor="terms" className="text-sm leading-snug">
                                            Acepto los{' '}
                                            <a href="#" className="text-indigo-600 hover:underline">
                                                Términos y Condiciones
                                            </a>{' '}
                                            y la{' '}
                                            <a href="#" className="text-indigo-600 hover:underline">
                                                Política de Privacidad
                                            </a>
                                        </Label>
                                    </div>
                                    <Button
                                        className="w-full bg-indigo-600 hover:bg-indigo-700 rounded-full shadow-md"
                                        onClick={() => {
                                            clearSelectedPlan();
                                            router.push('/dashboard');
                                        }}
                                    >
                                        Completar Compra
                                    </Button>
                                </div>
                            </CardContent>
                            <CardFooter className="flex-col items-start space-y-3 pt-0">
                                <div className="flex items-center space-x-2 text-sm text-gray-600">
                                    <i className="fas fa-lock text-indigo-500"></i>
                                    <span>Pago 100% seguro</span>
                                </div>
                                <div className="flex items-center space-x-2 text-sm text-gray-600">
                                    <i className="fas fa-undo text-indigo-500"></i>
                                    <span>30 días de garantía de devolución</span>
                                </div>
                                <div className="flex items-center space-x-2 text-sm text-gray-600">
                                    <i className="fas fa-headset text-indigo-500"></i>
                                    <span>Soporte técnico incluido</span>
                                </div>
                            </CardFooter>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CheckoutPage;
