import {SubscriptionService} from '@/lib/db/services/subscriptions/subscription.service';
import {NextResponse} from 'next/server';

const subscriptionService = new SubscriptionService();

export async function GET(request: Request, {params}: { params: { id: string } }) {
    try {
        const plan = await subscriptionService.getPlanById(params.id);
        if (!plan) {
            return NextResponse.json({success: false, error: 'Plan no encontrado'}, {status: 404});
        }
        return NextResponse.json({success: true, data: plan});
    } catch (error) {
        console.error(error);
        return NextResponse.json({success: false, error: 'Error al obtener el plan'}, {status: 500});
    }
}
