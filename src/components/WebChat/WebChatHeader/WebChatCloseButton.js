import CloseButton from "react-bootstrap/CloseButton";

const WebChatCloseButton = () => {
  const clickHandler = () => {
    //--- TODO
  };

  return (
    <ul className="navbar-nav ms-auto">
      <li className="nav-item">
        <CloseButton onClick={clickHandler} />
      </li>
    </ul>
  );
};

export default WebChatCloseButton;
