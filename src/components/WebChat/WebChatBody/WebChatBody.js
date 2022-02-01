import { useEffect } from "react";
import { useSelector } from "react-redux";

import AlfieMessage from "./AlfieMessage";
import UserMessage from "./UserMessage";
import WebChatBodyContainer from "./WebChatBodyContainer";

const WebChatBody = () => {
  const messages = useSelector((state) => state.chatHistory.messages);

  return (
    <WebChatBodyContainer>
      {messages.map((message) => {
        return (
          (message.hasOwnProperty("alfie") && (
            <AlfieMessage
              key={messages.indexOf(message)}
              text={message.alfie.text}
            />
          )) ||
          (message.hasOwnProperty("user") && (
            <UserMessage
              key={messages.indexOf(message)}
              buttons={message.user.buttons}
            />
          ))
        );
      })}
    </WebChatBodyContainer>
  );
};

export default WebChatBody;
