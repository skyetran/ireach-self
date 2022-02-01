import AlfieProfile from "../WebChatHeader/AlfieProfile";

const AlfieMessage = (props) => {
  return (
    <div className="d-flex align-items-baseline mb-4">
      <div className="align-self-start">
        <AlfieProfile />
      </div>
      <div className="pe-2">
        <div className="card d-inline-block p-2 px-3 m-1">{props.text}</div>
      </div>
    </div>
  );
};

export default AlfieMessage;
