import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, Outlet } from "react-router-dom";
import logo from "../src/images/logo2.png";
import { FaUserAlt } from "react-icons/fa";
import { GiShoppingBag } from "react-icons/gi";
import { FaSearch } from "react-icons/fa";
const Layout = () => {
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary" style={{backgroundColor:"blue" , position:"sticky" , top:0 , opacity:"1"}}>
        <Container style={{backgroundColor:"white" ,fontWeight:"bold"}}>
          <Navbar.Brand href="#home">
            <img src={logo} alt=""  style={{width:"70px" , height:"50px"}}/> </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">BuyTicket</Nav.Link>
             
              <Nav.Link as={Link} to="search">
                Search
              </Nav.Link>
              <Nav.Link as={Link} to="display">
                Display
              </Nav.Link>
             
            </Nav>
            <Nav className="me-auto">
              <Nav.Link href="#icon"></Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
              <FaUserAlt />
             
            </Nav.Link>
            <Nav.Link eventKey={2} href="#memes"> <GiShoppingBag /> </Nav.Link>
            <Nav.Link eventKey={2} href="#memes"> <FaSearch /></Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className="main">
        <Outlet />
      </div>
      <div className="footer"></div>
    </>
  );
};

export default Layout;

