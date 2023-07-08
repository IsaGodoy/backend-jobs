import { PrismaClient, PrismaPromise, users } from '@prisma/client'
const prisma = new PrismaClient()

const getAllUsers = async (): Promise<users[]> => {
    return await prisma.users.findMany()
}

const getUserById = async (id: number): Promise<users | null> => {
    return await prisma.users.findFirst({
        where: {
            id
        }
    })
}

export default {
    getAllUsers, getUserById
}