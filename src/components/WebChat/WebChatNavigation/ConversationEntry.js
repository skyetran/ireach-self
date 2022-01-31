import { useEffect } from "react";
import useRasa from "../../hooks/use-rasa";

const ConversationEntry = (props) => {
  const { responses, injectIntent } = useRasa();

  useEffect(() => {
    if (responses.length > 0) {
      console.log(responses);
    }
  }, [responses]);

  const injectIntentHandler = async () => {
    injectIntent({
      name: props.intentNameRasa,
    });
  };

  return (
    <div>
      <button onClick={injectIntentHandler}>{props.intentNameUI}</button>
    </div>
  );
};

export default ConversationEntry;
