import WebChatAlfieProfile from "./WebChatAlfieProfile";
import WebChatCloseButton from "./WebChatCloseButton";

const WebChatHeader = (props) => {
  return (
    <div className="card-header bg-transparent">
      <div className="navbar navbar-expand p-0">
        <WebChatAlfieProfile />
        <WebChatCloseButton />
      </div>
    </div>
  );
};

export default WebChatHeader;
