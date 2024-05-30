import { PrismaClient } from "@prisma/client";
import { log } from 'console';

const prisma = new PrismaClient();

async function insertUser(email: string, password: string, firstName: string, lastName: string) {
    const res = await prisma.users.create({
        data: {
            email,
            password,
            firstName,
            lastName
        }
    });

    console.log(res);

}

insertUser('akash@singh.com', 'akashsingh', 'Akash', 'Singh')