'use client';
import { useMemo } from "react";
import { useParams, usePathname } from "next/navigation";
import { TbMessageCircle2Filled } from "react-icons/tb";
import { HiUsers } from 'react-icons/hi2';  
import { BiLogOut } from "react-icons/bi";
import { signOut } from "next-auth/react";

import useConversation from "./useConversations";
const useRoutes = () => {
    const pathname = usePathname();
    const { conversationId } = useConversation();
    const routes = useMemo(() => [
        {
            label: 'Chat',
            href: '/conversations',
            icon: TbMessageCircle2Filled,
            active: pathname === '/conversations' || !!conversationId,
        },
        {
            label: 'Users',
            href: '/users',
            icon: HiUsers,
            active: pathname === '/users',
        },
        {
            label: 'Logout',
            href: '#',
            onClick: () => signOut(),
            icon: BiLogOut,
        }
    ], [pathname,conversationId])
    return routes;
}

export default useRoutes;
