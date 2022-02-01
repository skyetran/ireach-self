import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ChatBoxContainer from "./ChatBoxContainer";
import ConversationEntry from "./WebChatNavigation/ConversationEntry";
import WebChatHeader from "./WebChatHeader/WebChatHeader";
import WebChatBody from "./WebChatBody/WebChatBody";

const WebChat = (props) => {
  return (
    <Container className="mt-5">
      <Row>
        <Col md={3}>
          <Row>
            <ConversationEntry
              payload={{ name: "start_intro_session" }}
              text="Start Intro Session"
            />
            <ConversationEntry
              payload={{ name: "start_f_skill" }}
              text="Start F Skill"
            />
            <ConversationEntry
              payload={{ name: "start_i_skill" }}
              text="Start I Skill"
            />
            <ConversationEntry
              payload={{ name: "start_r_skill" }}
              text="Start R Skill"
            />
            <ConversationEntry
              payload={{ name: "start_s_skill" }}
              text="Start S Skill"
            />
            <ConversationEntry
              payload={{ name: "start_t_skill" }}
              text="Start T Skill"
            />
            <ConversationEntry
              payload={{ name: "start_closing_session" }}
              text="Start Outro Session"
            />
          </Row>
        </Col>
        <Col md={9}>
          <ChatBoxContainer>
            <WebChatHeader />
            <WebChatBody />
          </ChatBoxContainer>
        </Col>
      </Row>
    </Container>
  );
};

export default WebChat;
