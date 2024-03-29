import { Container, Row } from "react-bootstrap";
import { BiLogoGmail } from "react-icons/bi";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { Link } from 'react-router-dom';
import { useTheme } from './Themecontext';


const Footer = () => {

    const darktheme = useTheme();
  
    const theme = {
      backgroundColor: darktheme ? 'black' : 'white',
      color: darktheme ? 'white' : 'black'
    }
  
    const theme2 = {
      backgroundColor: darktheme ? 'rgb(11, 11, 11)' : 'white',
      color: darktheme ? 'white' : 'black'
    }
  
    const theme3 = {
      backgroundColor: darktheme ? 'rgb(11, 11, 11)' : 'white',
      boxShadow: darktheme ? 'none' : 'rgba(149, 157, 165, 0.2) 0px 8px 24px',
      color: darktheme ? 'white' : 'black'
    }
    return (
        <div>
            <Container fluid className="footer pb-2" style={theme}>
                <Container className="bar text-center" style={theme3}>
                    <Row className="pt-2">
                        <span className="link "> <Link to={"mailto:arunakil12@gmail.com"} className='me-4'><BiLogoGmail className='contact-logos' /></Link>
                            <Link to={'https://www.linkedin.com/in/arunmozhivarman-m-06414a263'} className='me-4'><AiFillLinkedin className='contact-logos' /></Link>
                            <Link to={'https://github.com/Arunmozhivarman12'} className='me-4'><AiFillGithub className='contact-logos' /></Link>
                            <Link to={'https://instagram.com/arun_akil_?igshid=MzNlNGNkZWQ4Mg=='} className='me-4'><AiFillInstagram className='contact-logos' /></Link>
                            <Link to={'https://wa.me/qr/H2IJDJD55KCCO1'}><AiOutlineWhatsApp className='contact-logos' /></Link></span></Row>
                    <Container className="footline mt-2 bg-secondary"></Container>
                    <p className="mt-2 pb-2 text-secondary fs-6">&copy; 2023 Arun</p>
                </Container>
            </Container>
        </div>
    )
}

export default Footer;