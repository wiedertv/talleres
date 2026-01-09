import jwt from "jsonwebtoken";

export function getUserFromToken(token: string): { userId: string, role: string, organizationId: string } | null {
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET!) as {
            userId: string,
            role: string,
            organizationId: string
        };
        return {userId: decoded.userId, role: decoded.role, organizationId: decoded.organizationId};
    } catch {
        return null;
    }
}
