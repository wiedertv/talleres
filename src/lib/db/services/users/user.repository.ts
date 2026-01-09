import prisma from "../../adapter";
import {User} from "@prisma/client";

export class UserRepository {
    async create(data: Omit<User, 'id' | 'createdAt' | 'updatedAt'>) {
        return prisma.user.create({data});
    }

    async findByOrganization(organizationId: string) {
        return prisma.user.findMany({where: {organizationId}});
    }

    async findById(id: string) {
        return prisma.user.findUnique({where: {id}});
    }

    async findByEmail(email: string) {
        return prisma.user.findUnique({
            where: {email},
            include: {
                organization: {
                    include: {
                        subscription: {
                            include: {
                                plan: true
                            }
                        }
                    }
                }
            }
        });
    }

    async profile(id: string) {
        return prisma.user.findUnique({
            where: {id},
            include: {
                organization: {
                    include: {
                        subscription: {
                            include: {
                                plan: true
                            }
                        }
                    }
                }
            }
        });
    }

    async findAll() {
        return prisma.user.findMany();
    }

    async update(id: string, data: Partial<User>) {
        return prisma.user.update({where: {id}, data});
    }

    async delete(id: string) {
        return prisma.user.delete({where: {id}});
    }
}
