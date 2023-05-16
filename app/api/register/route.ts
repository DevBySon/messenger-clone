import bcrypt from "bcrypt";

import prisma from "@/app/libs/prismadb";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { email, name, password } = body;
        if (!email || !name || !password) {
            return new NextResponse("Missing info", { status: 404 });
        }
        const hashedPassword = await bcrypt.hash(password, 12);
        const user = await prisma.user.create({
            data: {
                email,
                name,
                hashedPassword,
            },
        });
        return NextResponse.json(user);
    } catch (err: any) {
        console.log(err, 'REGISTER ERROR');
        return new NextResponse('Internal errors', { status: 500 });
    }
}
