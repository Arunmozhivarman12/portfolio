import { Container, Row, Col, Button } from 'react-bootstrap';
import { BiLogoGmail } from "react-icons/bi";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { Link } from 'react-router-dom';
import { HiArrowLongRight } from "react-icons/hi2";
import pro from './images/projectimage.jpg';
import play from "./images/Play.png";
import  { useTheme } from "./Themecontext"



const Home = () => {
       const darktheme = useTheme();
       
    const theme = {
        backgroundColor:darktheme? 'black':'white',
        color:darktheme? 'white':'black'
    }
    return (
        <div >
            <Container fluid className='pb-5' style={theme}>
                <Container>
                    <Row className='pb-5' style={theme}>
                        <Col lg='7' md='10' sm='12' xs='12' >
                            <p className='mt-5 ms-3 fs-1'>Hi.</p>
                            <h1 className='ms-3 '>I am <span className='name m-0'>ARUNMOZHIVARMAN</span></h1>
                            <p className='ms-3  fs-5  mb-5 intro-line pe-3'><span className='name fs-1'>Full stack web developer</span> Looking to deliver excellent web development skills to help grow a company.  </p>
                            <Button className=' ms-3 act-button fs-4' style={theme}><a href='https://drive.google.com/file/d/1hmTP5hd6LXriBcnfEkOBgTorQEOBx1Rm/view?usp=drivesdk' className='view' style={theme}>Resume</a></Button>
                        </Col> </Row>
                    <Row className='links  mt-5 ms-1'>
                        <span > <Link to={"mailto:arunakil12@gmail.com"} className='me-4'><BiLogoGmail className='contact-logos' style={theme}/></Link>
                            <Link to={'https://www.linkedin.com/in/arunmozhivarman-m-06414a263'} className='me-4'><AiFillLinkedin className='contact-logos' style={theme}/></Link>
                            <Link to={'https://github.com/Arunmozhivarman12'} className='me-4'><AiFillGithub className='contact-logos' style={theme}/></Link>
                            <Link to={'https://instagram.com/arun_akil_?igshid=MzNlNGNkZWQ4Mg=='} className='me-4'><AiFillInstagram className='contact-logos' style={theme}/></Link>
                            <Link to={'https://wa.me/qr/H2IJDJD55KCCO1'}><AiOutlineWhatsApp className='contact-logos' style={theme}/></Link></span>
                    </Row>
                    <Row className='mt-5 pt-5 mb-3' style={theme}>
                        <h3 className='ms-3  mt-3'>Proje<mark className='name ps-0'>cts</mark></h3>
                        <div className="certline mt-2 ms-4"></div>
                    </Row>

                    <Row className=' ms-1' style={theme}>
                        <h4 className='mt-4 mb-3 '>Ecommerce App<mark className=' fs-6 ms-2 bg-transparent text-secondary'>using React</mark></h4>
                        <Col lg={{ span: 8, order: 1 }} md={{ order: 2 }} sm={{ order: 2 }} xs={{ order: 2 }}>

                            <p className=' mt-3 fs-6  project-description'>I developed an e-commerce application using the MERN (MongoDB, Express, React, Node.js) stack, showcasing my skills in full-stack web development.
                                The app provides a user-friendly online shopping experience, allowing customers to browse and purchase some products. With user authentication features, customers can create accounts, securely log in, and manage their personal information.
                                The app also includes cart functionality, enabling customers to add items to their cart, review their selections, and securely check out.The app's seamless integration of the MERN stack ensures efficient data management and smooth user interactions.
                            </p>
                            <ul className='ms-3 '>
                                Technologies Used:
                                <li>Front-end : React.js, Redux</li>
                                <li>Back-end : Node.js, Express.js</li>
                                <li>Database : MongoDB</li>
                            </ul>
                            <a href="https://github.com/Arunmozhivarman12/Ecommerce-react-app" className="view2 fs-6">View<HiArrowLongRight className="view" /></a>
                        </Col>
                        <Col lg={{ span: 4, order: 2 }} md={{ order: 1 }} sm={{ order: 1 }} xs={{ order: 1 }}>
                            <img src={pro} className='w-100 d-block ' alt='projectimg' ></img>
                        </Col>
                    </Row>

                    <Row className='ms-1 mt-5' style={theme}>
                        <h4 className='mt-4 mb-3 '>Music player App<mark className=' fs-6 ms-2 bg-transparent text-secondary'>using React</mark></h4>
                        <Col lg={{ span: 8, order: 1 }} md={{ order: 2 }} sm={{ order: 2 }} xs={{ order: 2 }}>

                            <p className=' mt-3 fs-6  project-description'>
                                I developed a music player app that utilized the Spotify API to fetch my personal playlists data. Using React,
                                I created an interactive web application that displays detailed information about my playlists, consisting of 41 songs. Additionally,
                                I implemented Redux to enable seamless playback of song preview URLs, enhancing the overall user experience.
                                This project showcases my skills in API integration, React development, and state management with Redux.
                            </p>
                            <ul className='ms-3 '>
                                Technologies Used:
                                <li>Front-end : React.js, Redux</li>
                            </ul>
                            <a href="https://github.com/Arunmozhivarman12/Music-player" className="view2 fs-6">View<HiArrowLongRight className="view" /></a>
                        </Col>
                        <Col lg={{ span: 4, order: 2 }} md={{ order: 1 }} sm={{ order: 1 }} xs={{ order: 1 }} className='m-auto' >
                            <img src={play} className='w-100 d-block ' alt='projectimg' ></img>
                        </Col>
                    </Row>

                    <Row className='mt-5 mb-3' style={theme}>
                        <h3 className='ms-3  mt-3'> Mini Proje<mark className='name ps-0'>cts</mark></h3>
                        <div className="certline mt-2 ms-4"></div>
                    </Row>

                    <Row className='ms-1 ' style={theme}>
                        <h4 className='mt-2 mb-3 '>Crud App<mark className=' fs-6 ms-2 bg-transparent text-secondary'>using React</mark></h4>
                        <p className=' mt-2 fs-6  project-description'> I developed a mini project using the MERN (MongoDB, Express, React, Node.js) stack.
                            This CRUD (Create, Read, Update, Delete) app allows users to perform basic operations on a database, including adding, viewing, editing, and deleting data.
                            The seamless integration of the MERN stack ensures efficient data management and a smooth user experience.
                        </p>
                        <a href="https://github.com/Arunmozhivarman12/Crud-app" className="view2 fs-6">View<HiArrowLongRight className="view" /></a>
                    </Row>

                    <Row className='ms-1 ' style={theme}>
                        <h4 className='mt-5 mb-3 '>Authentication <mark className=' fs-6 ms-2 bg-transparent text-secondary'>using React</mark></h4>
                        <p className=' mt-2 fs-6  project-description'>This mini MERN (MongoDB, Express.js, React.js, Node.js) project is an authentication app that allows users to sign up and log in to securely view and manage their data.
                            It leverages JSON Web Tokens (JWT) for authentication, ensuring secure communication between the client and server. The app provides a seamless and secure experience,
                            empowering users to securely access and interact with their personal data.
                        </p>
                        <a href="https://github.com/Arunmozhivarman12/Authentication" className="view2 fs-6">View<HiArrowLongRight className="view" /></a>
                    </Row>

                    <Row className='ms-1' style={theme}>
                        <h4 className='mt-5 mb-3'>Form validation<mark className=' fs-6 ms-2 bg-transparent text-secondary'>using HTML</mark></h4>
                        <p className=' mt-2 fs-6 project-description'> This web page utilizes HTML, CSS, and JavaScript to create a form validation functionality.
                            Users can input data into the form, and the JavaScript code validates the entries based on predefined rules.
                            The HTML and CSS provide an appealing and user-friendly interface, enhancing the overall user experience.
                        </p>
                        <a href="https://github.com/Arunmozhivarman12/Form-validation" className="view2 fs-6">View<HiArrowLongRight className="view" /></a>
                    </Row>

                    <Row className='ms-1 ' style={theme}>
                        <h4 className='mt-5 mb-3 '>Fetch ApI<mark className=' fs-6 ms-2 bg-transparent text-secondary'>using React</mark></h4>
                        <p className=' mt-2 fs-6  project-description'> This mini project utilizes the Fetch API in combination with React to build a data retrieval application.
                            The app provides an intuitive and responsive user interface for browsing and exploring fetched data.
                        </p>
                        <a href="https://github.com/Arunmozhivarman12/Fetch-api" className="view2 fs-6">View<HiArrowLongRight className="view" /></a>
                    </Row>
                </Container>
            </Container>
        </div>
    )
}

export default Home;

// with 10 months of experience in web development.
                    //   Obtained Full stack web development Certification from Nschool Academy


