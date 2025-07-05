// prisma/seed.ts
import {PrismaClient} from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    console.log('🚀 Sembrando los planes de suscripción...');

    // Opcional: Limpia los planes previos
    await prisma.subscriptionPlan.deleteMany();

    const plans = [
        // Planes Mensuales
        {
            name: 'Básico',
            description: 'Plan ideal para pequeños talleres con pocas operaciones mensuales.',
            price: 9.99,
            duration: 30, // días
        },
        {
            name: 'Profesional',
            description: 'Perfecto para talleres en crecimiento con múltiples usuarios.',
            price: 19.99,
            duration: 30,
        },
        {
            name: 'Empresarial',
            description: 'Pensado para grandes talleres con necesidades avanzadas.',
            price: 49.99,
            duration: 30,
        },
        // Planes Anuales (20% de descuento)
        {
            name: 'Básico Anual',
            description: 'Ahorra 20% pagando un año completo para pequeños talleres.',
            price: (9.99 * 12 * 0.8),
            duration: 365,
        },
        {
            name: 'Profesional Anual',
            description: 'Plan anual con descuento para talleres en expansión.',
            price: (19.99 * 12 * 0.8),
            duration: 365,
        },
        {
            name: 'Empresarial Anual',
            description: 'Ahorra 20% con nuestro plan anual para grandes talleres.',
            price: (49.99 * 12 * 0.8),
            duration: 365,
        },
    ];

    await prisma.subscriptionPlan.createMany({
        data: plans,
    });

    console.log('✅ Planes de suscripción sembrados correctamente');
}

main()
    .catch((e) => {
        console.error('❌ Error al sembrar:', e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
