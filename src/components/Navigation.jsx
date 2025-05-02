// components/Navbar.jsx
import { Link } from "react-router-dom";
import { FaRocket, FaBars, FaChevronDown } from "react-icons/fa";
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import CategoryPanel from "./CategoryPanel";
import '../styles/MainNavbar.css';


const MainNavbar = () => {
  return (
    <>
    
    <Navbar bg="light" expand="lg" className="shadow-sm">
      <Container>
        <Navbar.Brand href="#">Shop</Navbar.Brand>
        <Navbar.Toggle aria-controls="main-navbar" />
        <Navbar.Collapse id="main-navbar">
          <Nav className="me-auto">
            <Nav.Link href="#">Home</Nav.Link>

            <NavDropdown title="Fashion" id="fashion-dropdown" className="hover-dropdown">
              <NavDropdown.Item href="#">Men</NavDropdown.Item>
              <NavDropdown.Item href="#">Women</NavDropdown.Item>
            </NavDropdown>
            
            <NavDropdown title="Electronics" id="fashion-dropdown" className="hover-dropdown">
              <NavDropdown.Item href="#">Laptop</NavDropdown.Item>
              <NavDropdown.Item href="#">Smart Watch Accessories</NavDropdown.Item>
              <NavDropdown.Item href="#">Cameras</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Electronics" id="fashion-dropdown" className="hover-dropdown">
              <NavDropdown.Item href="#">Laptop</NavDropdown.Item>
              <NavDropdown.Item href="#">Smart Watch Accessories</NavDropdown.Item>
              <NavDropdown.Item href="#">Cameras</NavDropdown.Item>
            </NavDropdown>

         
            <Nav.Link href="#">Bags</Nav.Link>
            <Nav.Link href="#">Footwear</Nav.Link>
            <Nav.Link href="#">Groceries</Nav.Link>
            <Nav.Link href="#">Beauty</Nav.Link>
            <Nav.Link href="#">Wellness</Nav.Link>
            <Nav.Link href="#">Jewellery</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    

      {/* Right Section */}
      <div className="flex items-center gap-2 text-sm font-medium text-black cursor-pointer">
        <FaRocket className="text-lg" />
        <span>Free International Delivery</span>
      </div>
      </Navbar>
    <CategoryPanel />
    </>
  );
};

export default MainNavbar;