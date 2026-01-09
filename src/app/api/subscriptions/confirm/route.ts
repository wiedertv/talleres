// /api/subscriptions/confirm.ts
import {NextRequest, NextResponse} from 'next/server';
import {SubscriptionService} from '@/lib/db/services/subscriptions/subscription.service';
import {getUserFromToken} from "@/lib/jwt.utils";

export async function POST(req: NextRequest) {
    const token = req.cookies.get('auth-token')?.value;
    if (!token) {
        return NextResponse.json({success: false, error: 'No autenticado'}, {status: 401});
    }

    const decoded = getUserFromToken(token);
    if (!decoded) {
        return NextResponse.json({success: false, error: 'Token inválido'}, {status: 401});
    }

    const body = await req.json();
    const {planId, paymentMethod} = body;

    const service = new SubscriptionService();
    const result = await service.createOrRenewSubscription(decoded.userId, planId, paymentMethod);

    return NextResponse.json(result, {status: result.success ? 200 : 400});
}