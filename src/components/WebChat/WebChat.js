import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ChatBoxContainer from "./ChatBoxContainer";
import WebChatHeader from "./WebChatHeader/WebChatHeader";
import WebChatBody from "./WebChatBody/WebChatBody";

const WebChat = (props) => {
  return (
    <Container className="mt-4">
      <Row>
        <Col md={3}></Col>
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
