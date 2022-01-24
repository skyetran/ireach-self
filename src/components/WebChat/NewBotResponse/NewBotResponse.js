import Section from "../../UI/Section";
import UserResponseForm from "./UserResponseForm";
import useHttp from "../../../hooks/use-http";

const NewBotResponse = (props) => {
  const { isLoading, error, sendRequest: sendUserMessage } = useHttp();

  const enterMessageHandler = async (message) => {
    sendUserMessage(
      {
        url: "http://localhost:5005/webhooks/rest/webhook",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: {
          sender: "test_user",
          message: message,
        },
      },
      console.log.bind(null, message)
    );
  };

  return (
    <Section>
      <UserResponseForm
        onEnterMessage={enterMessageHandler}
        loading={isLoading}
      />
      {error && <p>{error}</p>}
    </Section>
  );
};

export default NewBotResponse;
