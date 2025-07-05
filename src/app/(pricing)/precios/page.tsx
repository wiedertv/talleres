'use client';
import React, {useEffect, useState} from 'react';
import {useRouter} from 'next/navigation';
import {Button} from '@/components/ui/button';
import {Card, CardContent, CardFooter, CardHeader, CardTitle} from '@/components/ui/card';
import {motion} from 'framer-motion';
import {getSelectedPlan, saveSelectedPlan} from '@/lib/utils';
import {isLoggedIn} from '@/lib/auth';
import {Switch} from '@/components/ui/switch';
import {Badge} from '@/components/ui/badge';

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

    const handlePlanSelect = (planId: string) => {
        saveSelectedPlan(planId);

        if (isLoggedIn()) {
            router.push('/procesar-pago');
        } else {
            router.push('/autenticacion/registro');
        }
    };

    useEffect(() => {
        const selectedPlan = getSelectedPlan();
        if (isLoggedIn() && selectedPlan) {
            router.push('/procesar-pago');
        }
    }, [router]);

    return (
        <div className="container mx-auto px-4 py-12">
            <h1 className="text-4xl font-bold text-center mb-8">Selecciona tu Plan</h1>

            {/* Switch Mensual / Anual */}
            <div className="flex items-center justify-center space-x-4 mb-12">
                <span className={`font-medium ${!isAnnual ? 'text-gray-900' : 'text-gray-500'}`}>Mensual</span>
                <Switch checked={isAnnual} onCheckedChange={setIsAnnual}
                        className="data-[state=checked]:bg-indigo-600"/>
                <div className="flex items-center">
                    <span className={`font-medium ${isAnnual ? 'text-gray-900' : 'text-gray-500'}`}>Anual</span>
                    <Badge className="ml-2 bg-green-100 text-green-800 hover:bg-green-100">Ahorra 20%</Badge>
                </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
                {plans.map((plan) => (
                    <motion.div key={plan.id} whileHover={{y: -5}} transition={{duration: 0.2}}>
                        <Card className="transition-all border-gray-200 hover:border-indigo-300">
                            <CardHeader>
                                <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                                <div className="mt-4">
                                    <span className="text-4xl font-bold text-gray-900">
                                        {isAnnual ? `${(plan.price * 12 * 0.8).toFixed(2)}€` : `${plan.price.toFixed(2)}€`}
                                    </span>
                                    <span className="text-gray-600 ml-2">{isAnnual ? '/año' : '/mes'}</span>
                                </div>
                            </CardHeader>

                            <CardContent className="pt-4 h-80">
                                <p className="text-gray-700">{plan.description || 'Un excelente plan para tu negocio.'}</p>
                            </CardContent>

                            <CardFooter>
                                <Button className="w-full" onClick={() => handlePlanSelect(plan.id)}>
                                    Seleccionar Plan
                                </Button>
                            </CardFooter>
                        </Card>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default PricingPage;
