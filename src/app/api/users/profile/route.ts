import {NextRequest, NextResponse} from 'next/server';
import {UserService} from '@/lib/db/services/users/user.service';
import {getUserFromToken} from "@/lib/jwt.utils"; // Asegúrate de tener esta función utilitaria

const userService = new UserService();

export async function GET(req: NextRequest) {
    const token = req.cookies.get('auth-token')?.value;
    if (!token) {
        return NextResponse.json({success: false, error: 'No autenticado'}, {status: 401});
    }

    const decoded = getUserFromToken(token);
    if (!decoded) {
        return NextResponse.json({success: false, error: 'Token inválido'}, {status: 401});
    }

    const result = await userService.getProfile(decoded.userId);

    if (!result.success) {
        return NextResponse.json(result, {status: 404});
    }

    return NextResponse.json({success: true, data: result.data});
}
