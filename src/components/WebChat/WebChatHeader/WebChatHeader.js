import WebChatAlfieProfile from "./WebChatAlfieProfile";
import WebChatCloseButton from "./WebChatCloseButton";
import WebChatHeaderContainer from "./WebChatHeaderContainer";

const WebChatHeader = (props) => {
  return (
    <WebChatHeaderContainer>
      <WebChatAlfieProfile />
      <WebChatCloseButton />
    </WebChatHeaderContainer>
  );
};

export default WebChatHeader;
