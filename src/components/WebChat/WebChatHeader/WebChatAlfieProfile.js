import AlfieProfile from "./AlfieProfile";
import WebChatAlfieProfileContainer from "./WebChatAlfieProfileContainer";

const WebChatAlfieProfile = () => {
  return (
    <WebChatAlfieProfileContainer>
      <li className="nav-item px-2">
        <AlfieProfile />
      </li>
      <li className="nav-item">Alfie</li>
    </WebChatAlfieProfileContainer>
  );
};

export default WebChatAlfieProfile;
