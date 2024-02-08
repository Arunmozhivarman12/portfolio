
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Button } from 'react-bootstrap';

import { HiBars3 } from "react-icons/hi2";
import { Link } from 'react-router-dom';
import { IoIosSunny } from "react-icons/io";
import { useTheme, useThemeUpdate } from './Themecontext';
import { FaMoon } from "react-icons/fa6";




const Header = () => {
  const darktheme = useTheme();
  const toggle = useThemeUpdate();

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
    <div >
      <Container fluid className=' pt-4 pb-5' style={theme}>
        <Container>
          <Navbar expand='lg' style={theme3}>
            <Container fluid  >
              <Navbar.Brand className='fs-5 name' >Arun</Navbar.Brand>
              <Navbar.Toggle aria-controls='offcanvasNavbar-expand-lg' ><HiBars3 /></Navbar.Toggle>
              <Navbar.Offcanvas
                id={`offcanvasNavbar-expand-lg`}
                aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
                placement="end"
                className=' canvas w-75'
              >
                <Offcanvas.Header closeButton  >
                  <Offcanvas.Title id={`offcanvasNavbarLabel-expand-lg`} >

                  </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body className='bg-transparent'>
                  <Nav className="justify-content-end flex-grow-1 pe-3 routes " style={theme2}>
                    <Link to={'/'} className=' ms-5 mt-2 fs-6' style={theme2}>Home</Link>
                    <Link to={'/skills'} className='ms-5 mt-2 fs-6' style={theme2}>Skills</Link>
                    <Link to={'/About'} className=' ms-5 mt-2 fs-6' style={theme2}>About</Link>
                    <Link to={'/Contact'} className=' ms-5 mt-2 fs-6' style={theme2}>Contact</Link>
                    <Button className='ms-5 bg-transparent theme-toggle p-0' style={theme} onClick={toggle}>{darktheme ? (<IoIosSunny />) : (<FaMoon />)}</Button>
                  </Nav>

                </Offcanvas.Body>
              </Navbar.Offcanvas>
            </Container>
          </Navbar>
        </Container>
      </Container>
    </div>
  )
}

export default Header;