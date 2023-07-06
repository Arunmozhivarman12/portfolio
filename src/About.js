import { Container, Row, Col, Button } from "react-bootstrap";
import { BiLogoGmail } from "react-icons/bi";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { Link } from 'react-router-dom';


const About = () => {
    return (
        <div>
            <Container fluid className="about pt-3 pb-3">
                <Container className="text-light">
                    <Row className="justify-content-center">
                        <Col md={6}>
                            <div className="content">
                                <h2 className="text-center mb-3">About Me</h2>
                                <Container className="certline mt-2 mb-5"></Container>
                                <p className="pdes">
                                    Hi there! I'm Arunmozhivarman, a passionate Web developer with a love for creating
                                    beautiful and functional web applications. I've had developed a diverse
                                    skill set.
                                </p>
                                <p className="pdes">
                                    I'm always eager to expand my knowledge and stay up to date with the latest technologies. I believe in writing clean,
                                    efficient, and maintainable code to deliver high-quality solutions.
                                </p>
                                <p className="pdes">
                                    I'm currently available for Full-time web development job opportunities where i can learn and apply my knowledge of web development to meet client needs
                                    and exceed their expectations.
                                </p>
                            </div>
                        </Col>
                    </Row>
                    <Row className='links  mt-5 ms-1 justify-content-center '>
                        <Col lg={4} md={4} className="ps-0">
                            <span > <Link to={"mailto:arunakil12@gmail.com"} className='me-4'><BiLogoGmail className='contact-logos' /></Link>
                                <Link to={'https://www.linkedin.com/in/arunmozhivarman-m-06414a263'} className='me-4'><AiFillLinkedin className='contact-logos' /></Link>
                                <Link to={'https://github.com/Arunmozhivarman12'} className='me-4'><AiFillGithub className='contact-logos' /></Link>
                                <Link to={'https://instagram.com/arun_akil_?igshid=MzNlNGNkZWQ4Mg=='} className='me-4'><AiFillInstagram className='contact-logos' /></Link>
                                <Link to={'https://wa.me/qr/H2IJDJD55KCCO1'}><AiOutlineWhatsApp className='contact-logos' /></Link></span>
                        </Col>
                        <Col lg={2} md={2} className="text-lg-end ps-0 pt-lg-0 pt-md-0 pt-5">
                            <Button className='act-button'><Link to={'/Contact'} className='view fs-6'>Contact</Link></Button>
                        </Col>
                    </Row>

                </Container>
            </Container>
        </div>
    )
}

export default About;