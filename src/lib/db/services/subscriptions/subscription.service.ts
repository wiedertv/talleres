import prisma from "../../adapter";

export class SubscriptionService {
    async getAllPlans() {
        return prisma.subscriptionPlan.findMany({
            orderBy: {price: 'asc'},
        });
    }

    async getPlanById(id: string) {
        return prisma.subscriptionPlan.findUnique({where: {id}});
    }

    async createOrRenewSubscription(organizationId: string, planId: string, paymentMethod: string) {
        const plan = await prisma.subscriptionPlan.findUnique({where: {id: planId}});
        if (!plan) return {success: false, error: "Plan no encontrado"};

        const now = new Date();
        const endDate = new Date(now.getTime() + plan.duration * 24 * 60 * 60 * 1000);

        const existing = await prisma.subscription.findFirst({
            where: {organization: {id: organizationId}}
        });

        const subscription = existing
            ? await prisma.subscription.update({
                where: {id: existing.id},
                data: {
                    planId,
                    startDate: now,
                    endDate,
                    isActive: true,
                },
            })
            : await prisma.subscription.create({
                data: {
                    organization: {connect: {id: organizationId}},
                    planId,
                    startDate: now,
                    endDate,
                },
            });

        // Historial de pago
        await prisma.paymentHistory.create({
            data: {
                subscriptionId: subscription.id,
                amount: plan.price,
                paymentMethod,
                paidAt: now,
                nextRenewalAt: endDate,
            },
        });

        return {success: true, data: subscription};
    }
}
