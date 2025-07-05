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
}
