import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ChatBoxContainer from "./ChatBoxContainer"
import WebChatHeader from "./WebChatHeader/WebChatHeader";
import AlfieProfile from "./WebChatHeader/AlfieProfile";

const WebChat = (props) => {
  return (
    <Container className="mt-4">
      <Row>
        <Col md={3}></Col>
        <Col md={9}>
          <ChatBoxContainer>
            <WebChatHeader />
            <div className="card-body p-4" style={{ height: 500, overflow: "auto" }}>
              <div className="d-flex align-items-baseline mb-4">
                <AlfieProfile />
              </div>
            </div>
          </ChatBoxContainer>
        </Col>
      </Row>
    </Container>
  );
};

export default WebChat;
