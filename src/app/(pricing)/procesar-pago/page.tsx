'use client';
import React, {useEffect, useState} from 'react';
import {useRouter} from 'next/navigation';
import {isLoggedIn} from '@/lib/auth';
import {clearSelectedPlan, getSelectedPlan} from '@/lib/utils';

const CheckoutPage = () => {
    const router = useRouter();
    const [plan, setPlan] = useState<string | null>(null);

    useEffect(() => {
        if (!isLoggedIn()) {
            router.push('/autenticacion/registro');
            return;
        }

        const selected = getSelectedPlan();
        if (!selected) {
            router.push('/precios');
            return;
        }

        setPlan(selected);
    }, [router]);

    if (!plan) return <p className="text-center py-12">Cargando checkout...</p>;

    return (
        <div className="container mx-auto px-4 py-12">
            <h1 className="text-4xl font-bold text-center mb-8">Checkout</h1>
            <p className="text-center mb-4">Vas a suscribirte al plan: <strong>{plan}</strong></p>

            {/* Aquí puedes colocar tu formulario completo de pago */}

            <button
                className="bg-indigo-600 text-white py-2 px-6 rounded mt-6 mx-auto block"
                onClick={() => {
                    clearSelectedPlan();
                    router.push('/panel-administrativo'); // O donde quieras llevarlo después
                }}
            >
                Confirmar Pago
            </button>
        </div>
    );
};

export default CheckoutPage;
