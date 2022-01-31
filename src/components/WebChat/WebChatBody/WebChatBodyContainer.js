const WebChatBodyContainer = (props) => {
  return (
    <div className="card-body p-4" style={{ height: 500, overflow: "auto" }}>
      {props.children}
    </div>
  );
};

export default WebChatBodyContainer;
