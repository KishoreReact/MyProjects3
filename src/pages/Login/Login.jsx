import './Login.css'
import { Col, Container, Row } from "react-bootstrap";
import LoginForm from "./LoginForm/LoginForm";


const BannerContent = ({ title, subTitle }) => {
  return (
    <div className={"banner_content"}>
      <h2 className={"banner_title"}>{"K_M_C"}</h2>
      <div className={"banner_desc blinking-text"}>{"Everything is possible"}</div>
    </div>
  );
};


function Login(){
  return (
    <div>
      <Container className={"fullContainer"}>
        <Row>
          <Col>
          <BannerContent/>
          </Col>

          <Col>
          <LoginForm />
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Login