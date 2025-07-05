import {SubscriptionService} from '@/lib/db/services/subscriptions/subscription.service';
import {NextResponse} from 'next/server';

const subscriptionService = new SubscriptionService();

export async function GET() {
    try {
        const plans = await subscriptionService.getAllPlans();
        return NextResponse.json({success: true, data: plans});
    } catch (error) {
        console.error(error);
        return NextResponse.json({success: false, error: 'Error al obtener los planes'}, {status: 500});
    }
}
