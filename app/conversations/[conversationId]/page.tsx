import EmptyState from "@/app/components/EmptyState";
import getConversationsById from "@/app/actions/getConversationById";
import getMessage from "@/app/actions/getMessages";
import Header from "./components/Header";
import Body from "./components/Body";
import Form from "./components/Form";

interface IParams {
    conversationId: string;
}

const conversationId = async ({ params }: { params: IParams }) => {
    const conversation = await getConversationsById(params.conversationId)
    const messages = await getMessage(params.conversationId);
    if (!conversation) {
        return (
            <div className="lg:pl-80 h-full">
                <div className="h-full flex flex-col">
                    <EmptyState />
                </div>
            </div>
        )
    }
    return (
        <div className="lg:pl-80 h-full">
            <div className="h-full flex flex-col">
                <Header conversation={conversation}/>
                <Body initialMessages={messages}/>
                <Form/>
            </div>
        </div>
    )
}

export default conversationId;
