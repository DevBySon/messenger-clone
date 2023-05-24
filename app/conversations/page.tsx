"use client";

import clsx from "clsx";
import useConversation from "../hooks/useConversation";
import EmptyState from "../components/EmptyState";

const Home = () => {
    const { isOpen } = useConversation();
    console.log(isOpen);
    
    return (
        <div className={clsx("lg:pl-80 h-full", isOpen? 'block': 'hidden')}>
            <EmptyState />
        </div>
    );
} 

export default Home;