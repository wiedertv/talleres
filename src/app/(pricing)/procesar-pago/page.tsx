'use client';

import React, {useEffect, useState} from 'react';
import {useRouter} from 'next/navigation';
import {Card, CardContent, CardFooter, CardHeader, CardTitle} from '@/components/ui/card';
import {Input} from '@/components/ui/input';
import {Label} from '@/components/ui/label';
import {RadioGroup, RadioGroupItem} from '@/components/ui/radio-group';
import {Separator} from '@/components/ui/separator';
import {Progress} from '@/components/ui/progress';
import {Badge} from '@/components/ui/badge';
import {Button} from '@/components/ui/button';
import {Skeleton} from '@/components/ui/skeleton';
import {clearSelectedPlan, getSelectedPlan} from '@/lib/utils';

interface Plan {
    id: string;
    name: string;
    description: string;
    price: number;
    duration: number;
}

export default function CheckoutPage() {
    const router = useRouter();
    const [plan, setPlan] = useState<Plan | null>(null);
    const [userProfile, setUserProfile] = useState<{
        name: string;
        email: string;
        organizationName?: string;
    } | null>(null);
    const [paymentMethod, setPaymentMethod] = useState('binance');
    const [reference, setReference] = useState('');
    const [progress] = useState(66);

    useEffect(() => {
        const selectedId = getSelectedPlan();
        if (!selectedId) {
            router.push('/precios');
            return;
        }

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

        fetch('/api/users/profile')
            .then(res => res.json())
            .then(json => {
                if (json.success) {
                    setUserProfile({
                        name: json.data.name,
                        email: json.data.email,
                        organizationName: json.data.organization?.name || '',
                    });
                }
            });
    }, [router]);

    const loading = !plan || !userProfile;

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
                <div className="md:col-span-3 space-y-6">
                    <Card>
                        <CardHeader>
                            <CardTitle>Información Personal</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <Label>Nombre</Label>
                                    {loading ? <Skeleton className="h-10 w-full"/> : (
                                        <Input value={userProfile.name} disabled/>
                                    )}
                                </div>
                                <div className="space-y-2">
                                    <Label>Empresa</Label>
                                    {loading ? <Skeleton className="h-10 w-full"/> : (
                                        <Input value={userProfile.organizationName || ''} disabled/>
                                    )}
                                </div>
                            </div>
                            <div className="space-y-2">
                                <Label>Correo electrónico</Label>
                                {loading ? <Skeleton className="h-10 w-full"/> : (
                                    <Input value={userProfile.email} disabled/>
                                )}
                            </div>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle>Método de Pago</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod} className="space-y-3">
                                {[
                                    {id: 'binance', label: 'Binance'},
                                    {id: 'paypal', label: 'PayPal'},
                                    {id: 'transfer', label: 'Transferencia Bancaria'},
                                    {id: 'pago-movil', label: 'Pago Móvil'}
                                ].map(({id, label}) => (
                                    <div key={id} className="flex items-center space-x-3 border rounded-lg p-4">
                                        <RadioGroupItem value={id} id={id}/>
                                        <Label htmlFor={id} className="flex-1 cursor-pointer">{label}</Label>
                                    </div>
                                ))}
                            </RadioGroup>

                            {(paymentMethod === 'transfer' || paymentMethod === 'pago-movil') && (
                                <div className="bg-gray-50 border p-4 rounded space-y-3">
                                    <p className="text-sm font-medium">Datos
                                        para {paymentMethod === 'transfer' ? 'transferencia' : 'pago móvil'}:</p>
                                    <ul className="text-sm text-gray-700 space-y-1">
                                        <li><strong>Banco:</strong> Banesco</li>
                                        {paymentMethod === 'transfer' &&
                                            <li><strong>Cuenta:</strong> xxxx-xxxx-xxxx-xxxxx</li>}
                                        <li><strong>Cédula/RIF:</strong> V22955188</li>
                                        <li><strong>Nombre:</strong> Alirio Angel</li>
                                        {paymentMethod === 'pago-movil' &&
                                            <li><strong>Número:</strong> 0424-3057367</li>}
                                    </ul>

                                    <div className="space-y-1">
                                        <Label htmlFor="reference">Número de referencia</Label>
                                        <Input
                                            id="reference"
                                            placeholder="Ingresa el número de referencia"
                                            value={reference}
                                            onChange={e => setReference(e.target.value)}
                                        />
                                    </div>
                                </div>
                            )}
                        </CardContent>
                    </Card>
                </div>

                <div className="md:col-span-2">
                    <div className="sticky top-20">
                        <Card>
                            <CardHeader>
                                <CardTitle>Resumen del Pedido</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="bg-indigo-50 p-4 rounded-lg">
                                    <div className="flex justify-between items-center mb-2">
                                        <span className="font-medium">{plan?.name || 'Plan'}</span>
                                        <Badge className="bg-indigo-100 text-indigo-800">
                                            {plan?.duration && plan.duration > 30 ? 'Anual' : 'Mensual'}
                                        </Badge>
                                    </div>
                                    <div className="text-right font-medium">{plan?.price.toFixed(2)}$</div>
                                </div>

                                <Separator/>
                                <div className="flex justify-between font-bold">
                                    <span>Total</span>
                                    <span>{plan?.price.toFixed(2)}$</span>
                                </div>

                                <Button
                                    className="w-full bg-indigo-600 hover:bg-indigo-700 rounded-full shadow-md"
                                    onClick={() => {
                                        // Aquí puedes llamar a tu backend con los datos
                                        clearSelectedPlan();
                                        router.push('/dashboard');
                                    }}
                                    disabled={loading || (paymentMethod === 'transfer' || paymentMethod === 'pago-movil') && !reference}
                                >
                                    Completar Compra
                                </Button>
                            </CardContent>
                            <CardFooter className="flex-col items-start space-y-3 pt-0">
                                <div className="text-sm text-gray-600">Pago 100% seguro</div>
                                <div className="text-sm text-gray-600">30 días de garantía</div>
                            </CardFooter>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
}
