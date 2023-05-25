import Sidebar from "../components/sidebar/Sidebar";
import getConversations from "../actions/getConversation";
import ConversationList from "./components/ConversationList";
import getUsers from "../actions/getUsers";

export default async function ConversationLayout ({children}:{children:React.ReactNode}) {
    const conversations = await getConversations();
    const users = await getUsers();
    return (
        // @ts-expect-error Sever Component
        <Sidebar>
            <div className="h-full">
                <ConversationList users={users} initialItems={conversations}/>
                {children}
            </div>
        </Sidebar>
    )
}