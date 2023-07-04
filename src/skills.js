import { Container, Row, Col } from "react-bootstrap";
import html from './images/html.png';
import css from './images/css.jpg';
import bootstrap from './images/Bootstrap.jpg';
import javascript from './images/javascript.png';
import react from './images/react.png';
import redux from './images/redux.png';
import node from './images/node.jpg';
import mdb from './images/mongodb.png';
import { HiArrowLongRight } from "react-icons/hi2";



const Skills = () => {
  return (
    <div>
      <Container fluid className="main2">
        <Container className="justify-content-lg-center skillc">
          <h1 className="text-center text-light">Ski<mark className="name ms-0 ps-0">lls</mark></h1>
          <Container className="line mt-5"></Container>
          <Row className="mt-5 pt-3">
            <Col lg='3' md='3' sm='6' xs='6' className="pb-4 skill-logos">
              <img src={html} className="d-block ms-auto me-auto " alt="html"></img>
              <p className="text-center text-light">HTML</p>
            </Col>
            <Col lg='3' md='3' sm='6' xs='6' className="pb-4 skill-logos">
              <img src={css} className="d-block ms-auto me-auto" alt="css"></img>
              <p className="text-center text-light">CSS</p>
            </Col>
            <Col lg='3' md='3' sm='6' xs='6' className="pb-4 skill-logos">
              <img src={bootstrap} className="d-block ms-auto me-auto" alt="bootstrap"></img>
              <p className="text-center text-light">BOOTSTRAP</p>
            </Col>
            <Col lg='3' md='3' sm='6' xs='6' className="pb-4 skill-logos">
              <img src={javascript} className="d-block ms-auto me-auto" alt='javascript'></img>
              <p className="text-center text-light">JAVASCRIPT</p>
            </Col>
            <Col lg='3' md='3' sm='6' xs='6' className="pb-4 skill-logos">
              <img src={react} className="d-block ms-auto me-auto" alt="react"></img>
              <p className="text-center text-light">REACT</p>
            </Col>
            <Col lg='3' md='3' sm='6' xs='6' className="pb-4 skill-logos">
              <img src={redux} className="d-block ms-auto me-auto" alt="redux"></img>
              <p className="text-center text-light">REDUX</p>
            </Col>
            <Col lg='3' md='3' sm='6' xs='6' className="pb-4 skill-logos">
              <img src={node} className="d-block ms-auto me-auto" alt="node"></img>
              <p className="text-center text-light">NODE</p>
            </Col>
            <Col lg='3' md='3' sm='6' xs='6' className="pb-4 skill-logos">
              <img src={mdb} alt="my skills" className="d-block ms-auto me-auto" ></img>
              <p className="text-center text-light">MONGODB</p>
            </Col>

          </Row>

        </Container>
        <Container className="text-light mt-4 pb-4 ">
          <h3>Certifica<mark className="name ps-0">tion</mark></h3>
          <div className="certline mt-3"></div>
          <p className="mt-3 fs-4 ">Full stack web development<span className="fs-6 ps-0 text-secondary"> - Nschool Academy</span></p>
          <p className="fs-6 text-secondary">Jan 2023</p>
          <a href="https://drive.google.com/file/d/1c_OUK04nAlFLgXcCW6Ogts7sjsTsUQBq/view?usp=drivesdk" className="view">view<HiArrowLongRight className="view" /></a>
        </Container>
      </Container>
    </div>
  )
}

export default Skills;