const WebChatHeaderContainer = (props) => {
  return (
    <div className="card-header bg-transparent">
      <div className="navbar navbar-expand p-0">{props.children}</div>
    </div>
  );
};

export default WebChatHeaderContainer;
