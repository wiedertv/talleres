import {UserRepository} from "./user.repository";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import prisma from "../../adapter";
import {Prisma, Role, User} from "@prisma/client";

export class UserService {
    private userRepository = new UserRepository();

    // Registro de un nuevo admin + organización
    async register(data: Omit<User, "id" | "createdAt" | "updatedAt" | "role" | "organizationId">, password: string, organizationName: string) {
        const hashedPassword = await bcrypt.hash(password, 10);

        return prisma.$transaction(async (tx: Prisma.TransactionClient) => {
            const user = await tx.user.create({
                data: {
                    ...data,
                    password: hashedPassword,
                    role: Role.ADMIN
                }
            });

            const organization = await tx.organization.create({
                data: {
                    name: organizationName,
                    ownerId: user.id
                }
            });

            await tx.user.update({
                where: {id: user.id},
                data: {organizationId: organization.id}
            });

            const token = jwt.sign({
                userId: user.id,
                role: user.role,
                organizationId: organization.id
            }, process.env.JWT_SECRET!, {expiresIn: "1d"});

            return {success: true, data: {user: {...user, organizationId: organization.id}, token}};
        });
    }

    async login(email: string, password: string) {
        const user = await this.userRepository.findByEmail(email);
        if (!user) return {success: false, error: "Usuario no encontrado"};

        const valid = await bcrypt.compare(password, user.password);
        if (!valid) return {success: false, error: "Contraseña incorrecta"};

        const token = jwt.sign(
            {userId: user.id, role: user.role, organizationId: user.organizationId},
            process.env.JWT_SECRET!,
            {expiresIn: "1d"}
        );

        return {success: true, data: {user, token}};
    }

    // Solo el admin puede crear trabajadores en su misma organización
    async createWorker(adminId: string, data: Omit<User, "id" | "createdAt" | "updatedAt" | "role" | "organizationId" | "password">, password: string, role: Role) {
        const admin = await this.userRepository.findById(adminId);
        if (!admin || admin.role !== Role.ADMIN) return {success: false, error: "No autorizado"};

        const hashedPassword = await bcrypt.hash(password, 10);

        return this.userRepository.create({
            ...data,
            password: hashedPassword,
            role,
            organizationId: admin.organizationId!
        });
    }

    async updateWorkerRole(workerId: string, role: Role, adminId: string) {
        const admin = await this.userRepository.findById(adminId);
        if (!admin || admin.role !== Role.ADMIN) return {success: false, error: "No autorizado"};

        return this.userRepository.update(workerId, {role});
    }

    async getWorkers(adminId: string) {
        const admin = await this.userRepository.findById(adminId);
        if (!admin || admin.role !== Role.ADMIN) return {success: false, error: "No autorizado"};

        return this.userRepository.findByOrganization(admin.organizationId!).then(users =>
            users.filter((user: User) => user.role !== Role.ADMIN)
        );
    }
}
