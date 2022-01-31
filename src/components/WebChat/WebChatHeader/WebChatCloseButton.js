import CloseButton from "react-bootstrap/CloseButton";
import WebChatCloseButtonContainer from "./WebChatCloseButtonContainer";

const WebChatCloseButton = () => {
  const clickHandler = () => {
    //--- TODO
  };

  return (
    <WebChatCloseButtonContainer>
      <li className="nav-item">
        <CloseButton onClick={clickHandler} />
      </li>
    </WebChatCloseButtonContainer>
  );
};

export default WebChatCloseButton;
