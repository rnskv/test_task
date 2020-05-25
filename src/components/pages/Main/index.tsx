import * as React from "react";
import Overlay from "components/templates/Overlay";

import {
    useChatMessages,
    useChatMessagesCount,
    useChatStatuses,
    useChatActions
} from "../../../redux/chat/hooks";

const Main: React.FunctionComponent<{}> = ({ children }) => {
    const { isLoading, isError, isLoaded } = useChatStatuses();

    const messages = useChatMessages();
    const messagesCount = useChatMessagesCount();
    const { thunkSendMessage } = useChatActions();

    return (
        <Overlay>
            <h2>Главная - {messagesCount} </h2>
            <button onClick={() => thunkSendMessage('123')}>Тык</button>
            {
                messages.map((message) => (
                    <div>
                        { message.user}
                        { message.text }
                        { message.timestamp }
                    </div>)
                )
            }
            { children }
        </Overlay>
    )
};

export default Main;