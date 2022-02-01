import Button from "react-bootstrap/Button";

import useRasa from "../../../hooks/use-rasa";

const ResponseButton = (props) => {
  const { injectIntent } = useRasa();
  
  const clickHandler = () => {
    injectIntent(props.payload)
  }

  return (
    <div className="mb-2">
      <Button onClick={clickHandler}>{props.title}</Button>
    </div>
  );
};

export default ResponseButton;
