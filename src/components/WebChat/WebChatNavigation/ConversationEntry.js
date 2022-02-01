import Button from "react-bootstrap/Button";

import useRasa from "../../../hooks/use-rasa";

const ConversationEntry = (props) => {
  const { injectIntent } = useRasa();

  const clickHandler = async () => {
    injectIntent(props.payload);
  };

  return (
    <div className="d-grid gap-2 mb-2">
      <Button variant="primary" size="lg" onClick={clickHandler}>
        {props.text}
      </Button>
    </div>
  );
};

export default ConversationEntry;
