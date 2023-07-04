
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';

import { HiBars3 } from "react-icons/hi2";
import { Link } from 'react-router-dom';


const Header = () =>{
    return(
        <div >
            <Container fluid className='bg pt-4 pb-5'>
                <Container>
                <Navbar  expand='lg' className="">
          <Container fluid  >
            <Navbar.Brand  className='text-light fs-5 name' >Arun</Navbar.Brand>
            <Navbar.Toggle aria-controls='offcanvasNavbar-expand-lg' ><HiBars3/></Navbar.Toggle>
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
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3 routes ">
                  <Link to={'/'} className='text-light ms-5 mt-2 fs-6'>Home</Link>
                 <Link to={'/skills'} className='text-light ms-5 mt-2 fs-6'>Skills</Link>
                 <Link to={'/About'} className='text-light ms-5 mt-2 fs-6'>About</Link>
                  <Link to={'/Contact'} className='text-light ms-5 mt-2 fs-6'>Contact</Link>
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