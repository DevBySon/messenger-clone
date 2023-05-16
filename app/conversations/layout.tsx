import Sidebar from "../components/sidebar/Sidebar";
import getConversations from "../actions/getConversation";
import ConversationList from "./components/ConversationList";

export default async function ConversationLayout ({children}:{children:React.ReactNode}) {
    const conversations = await getConversations();
    return (
        // @ts-expect-error Sever Component
        <Sidebar>
            <div className="h-full">
                <ConversationList initialItems={conversations}/>
                {children}
            </div>
        </Sidebar>
    )
}
