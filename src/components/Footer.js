import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import myLogo from "../assets/img/myLogo.PNG";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import './Footer.css'
export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={6}>
            <img className="footer-logo" src={myLogo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <h4 className="footer-h4 font-xl ">Follow Me On</h4>
            <div className="social-icon ">
              <a href="https://www.linkedin.com/in/sifat-niloy/"><img src={navIcon1} alt="" /></a>
              <a href="https://github.com/SifatNiloy"><img src={navIcon2} alt="" /></a>
              <a href="https://www.behance.net/sifat_niloy"><img src={navIcon3} alt="" /></a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
