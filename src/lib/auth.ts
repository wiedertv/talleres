'use server';
import {cookies} from 'next/headers';
import {getUserFromToken} from './jwt.utils';

export async function getCurrentUser() {
    const cookieStore = await cookies();
    const token = cookieStore.get('auth-token')?.value;

    if (!token) return null;

    return getUserFromToken(token);
}

