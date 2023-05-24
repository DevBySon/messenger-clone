import getCurrentUser from "@/app/actions/getCurrentUser";
import { NextResponse } from "next/server"
import prisma from '@/app/libs/prismadb';

export async function POST (req: Request) {
    try{ 
        const currntUser = await getCurrentUser();
        const body = await req.json();
        const {message, image, conversationId} = body;
        if(!currntUser?.id || !currntUser?.email) {
            return new NextResponse('unauthorized', {status:401})
        }
        const newMessage = await prisma.message.create({
            data: {
                body: message,
                image: image,
                conversation: {
                    connect: {id: conversationId}
                },
                sender: {
                    connect: {id: currntUser.id}
                },
                seen: {
                    connect: {id: currntUser.id}
                }
            },
            include: {
                seen: true,
                sender: true
            }
        })
        const updateConversation = await prisma.conversation.update({
            where: {id: conversationId},
            data: {
                lastMessageAt: new Date(),
                messages: {
                    connect: {id: newMessage.id}
                }
            },
            include: {
                users: true,
                messages: {
                    include: {seen:true}
                }
            }
        })
        return NextResponse.json(newMessage);
    } catch (err: any) {
        console.log(err, 'Error Message')
        return new NextResponse('internal error', {status:500})
    }
}