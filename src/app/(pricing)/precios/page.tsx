'use client';
import React, {useEffect, useState} from 'react';
import {useRouter} from 'next/navigation';
import {Button} from '@/components/ui/button';
import {Card, CardContent, CardFooter, CardHeader, CardTitle} from '@/components/ui/card';
import {motion} from 'framer-motion';
import {getSelectedPlan, saveSelectedPlan} from '@/lib/utils';
import {Switch} from '@/components/ui/switch';
import {Badge} from '@/components/ui/badge';
import {CheckCircle2} from 'lucide-react';

interface Plan {
    id: string;
    name: string;
    description?: string;
    price: number;
    duration: number; // En días
}

const PricingPage = () => {
    const router = useRouter();
    const [isAnnual, setIsAnnual] = useState(false);
    const [plans, setPlans] = useState<Plan[]>([]);

    useEffect(() => {
        const fetchPlans = async () => {
            try {
                const res = await fetch('/api/subscriptions');
                const {data} = await res.json();
                setPlans(data);
            } catch (error) {
                console.error('Error al obtener los planes', error);
            }
        };
        fetchPlans();
    }, []);

    const handlePlanSelect = async (planId: string) => {
        saveSelectedPlan(planId);

        try {
            const res = await fetch('/api/auth', {
                method: 'GET',
                credentials: 'include', // 👈 asegura que se envíen las cookies
            });

            const {loggedIn} = await res.json();
            console.log(loggedIn);
            if (loggedIn) {
                router.push('/procesar-pago');
            } else {
                router.push('/autenticacion/registro');
            }
        } catch (error) {
            console.error('Error al verificar login', error);
            router.push('/autenticacion/registro');
        }
    };

    useEffect(() => {
        const checkLoginAndRedirect = async () => {
            const selectedPlan = getSelectedPlan();
            if (!selectedPlan) return;

            try {
                const res = await fetch('/api/auth', {
                    method: 'GET',
                    credentials: 'include', // 👈 Necesario para enviar cookies
                });

                const {loggedIn} = await res.json();
                console.log(loggedIn);
                if (loggedIn) {
                    router.push('/procesar-pago');
                }
            } catch (error) {
                console.error('Error al verificar el estado de login', error);
            }
        };

        checkLoginAndRedirect();
    }, [router]);

    const highlightPlans = [plans[1]?.id, plans[4]?.id];

    return (
        <div className="container mx-auto px-4 py-12">
            <h1 className="text-4xl font-bold text-center mb-4">Planes para tu Taller</h1>
            <p className="text-center text-gray-600 mb-10 max-w-xl mx-auto">
                Elige el plan que mejor se adapte a las necesidades de tu taller. Cambia entre mensual y anual para
                aprovechar descuentos exclusivos.
            </p>

            {/* Toggle Mensual / Anual */}
            <div className="flex items-center justify-center space-x-4 mb-12">
                <span className={`font-medium ${!isAnnual ? 'text-gray-900' : 'text-gray-500'}`}>Mensual</span>
                <Switch
                    checked={isAnnual}
                    onCheckedChange={setIsAnnual}
                    className="data-[state=checked]:bg-indigo-600"
                />
                <div className="flex items-center">
                    <span className={`font-medium ${isAnnual ? 'text-gray-900' : 'text-gray-500'}`}>Anual</span>
                    <Badge className="ml-2 bg-green-100 text-green-800 hover:bg-green-100">
                        Ahorra 20%
                    </Badge>
                </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
                {plans.map((plan) => {
                    const isHighlighted = highlightPlans.includes(plan.id);
                    const price = plan.price.toFixed(2);
                    const isAnnualPlan = plan.duration > 30; // Asumimos que duración mayor a 30 días es anual

                    return (
                        isAnnualPlan !== isAnnual ? null :
                            <motion.div key={plan.id} whileHover={{y: -5}} transition={{duration: 0.2}}>
                                <Card
                                    className={`relative overflow-hidden transition-all border ${
                                        isHighlighted
                                            ? 'border-indigo-600 shadow-lg ring-1 ring-indigo-600'
                                            : 'border-gray-200 hover:border-indigo-300'
                                    }`}
                                >
                                    {isHighlighted && (
                                        <div
                                            className="absolute top-0 right-0 bg-indigo-600 text-white px-4 py-1 text-sm font-medium rounded-bl-lg">
                                            Más Popular
                                        </div>
                                    )}

                                    <CardHeader className={`pb-6 ${isHighlighted ? 'bg-indigo-50' : ''}`}>
                                        <CardTitle className="text-2xl font-bold text-center">{plan.name}</CardTitle>
                                        <div className="mt-4 text-center">
                                            <span className="text-4xl font-extrabold text-gray-900">{price}$</span>
                                            <span className="text-gray-600 ml-2">{isAnnual ? '/año' : '/mes'}</span>
                                        </div>
                                    </CardHeader>

                                    <CardContent className="pt-4 h-56 flex flex-col justify-center">
                                        <p className="text-gray-700 text-center mb-4">
                                            {plan.description || 'Un excelente plan para tu negocio.'}
                                        </p>

                                        <ul className="space-y-2 text-sm text-gray-600 max-w-xs mx-auto">
                                            <li className="flex items-center">
                                                <CheckCircle2 className="text-green-500 mr-2" size={16}/>
                                                Soporte básico incluido
                                            </li>
                                            <li className="flex items-center">
                                                <CheckCircle2 className="text-green-500 mr-2" size={16}/>
                                                Acceso a todos los dashboards
                                            </li>
                                            <li className="flex items-center">
                                                <CheckCircle2 className="text-green-500 mr-2" size={16}/>
                                                Actualizaciones frecuentes
                                            </li>
                                        </ul>
                                    </CardContent>

                                    <CardFooter>
                                        <Button
                                            className={`w-full rounded-full ${
                                                isHighlighted
                                                    ? 'bg-indigo-600 hover:bg-indigo-700 text-white'
                                                    : 'bg-white border border-indigo-600 text-indigo-600 hover:bg-indigo-50'
                                            }`}
                                            onClick={() => handlePlanSelect(plan.id)}
                                        >
                                            Seleccionar Plan
                                        </Button>
                                    </CardFooter>
                                </Card>
                            </motion.div>
                    );
                })}
            </div>
        </div>
    );
};

export default PricingPage;
