import ButtonGroup from "react-bootstrap/ButtonGroup";
import ResponseButton from "./ResponseButton";

const UserMessage = (props) => {
  return (
    <div className="d-flex align-items-baseline text-end justify-content-end mb-4">
      <ButtonGroup vertical>
        {props.buttons.map((button) => {
          return <ResponseButton key={button.title} title={button.title} payload={button.payload} />
        })}
      </ButtonGroup>
    </div>
  );
};

export default UserMessage;
