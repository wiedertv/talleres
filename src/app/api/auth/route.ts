import {NextResponse} from 'next/server';
import {cookies} from 'next/headers';

export async function GET() {
    const cookieStore = await cookies();
    const token = cookieStore.get('auth-token');
    return NextResponse.json({loggedIn: !!token});
}