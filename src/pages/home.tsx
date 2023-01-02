import { FC } from "react";
import { Col, Container, Row } from "reactstrap";
import HmueImage from "../assets/imgs/profile.png";
import '../styles/home.scss';

export interface IAppProps {}

export const Home: FC = (props: IAppProps) => {
  let skills = [
    "HTML",
    "CSS",
    "Javascript",
    "ReactJS",
    "ExpressJS",
    "PHP",
    "Laravel",
  ];
  return (
    <Container className="mt-5">
      <Row className="d-flex justify-content-center py-3">
        <Col md={10} className="d-flex justify-content-around">
          <img src={HmueImage} width={300} height={350} className="rounded"/>
          <div className="d-flex flex-column justify-content-center px-5 ms-5">
            <h1>Hello !</h1>
            <p>
              My name is Hmue Thet Paing Kyaw. I'm a 23 years old software programmer who is passionate about web apps and android applications development.
              Fuelled by my passion and enthusiasm, I have developed codes with love and gained a lots of experiences from seniors and colleagues.
            </p>
          </div>
        </Col>
      </Row>
      <Row className="d-flex justify-content-center gap-2 mt-5 py-5">
        <Col md={5}>
          <h1>My Journey</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit
            omnis quis nam doloribus quos illo saepe excepturi, quam aut. Veniam
            molestiae quos nemo inventore excepturi! Id fuga sit ipsum magnam.
          </p>
        </Col>
        <Col md={5}>
          <div className="d-flex flex-wrap mt-5">
          {skills.map((skill) => (
            <span className="skill">{skill}</span>
          ))}
          </div>
        </Col>
      </Row>
    </Container>
  );
};
