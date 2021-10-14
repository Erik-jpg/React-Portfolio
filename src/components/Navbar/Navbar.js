import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import "./Navbar.css"

const MyNavbar = (props) => {
  return (
    <div className="Row">
      <Navbar bg="dark" variant="dark">
        <Nav.Link Title="Bio" setSectionDisplay={props.setSectionDisplay}/>
        <Nav.Link Title="Projects" setSectionDisplay={props.setSectionDisplay}/>
        <Nav.Link Title="Resume" setSectionDisplay={props.setSectionDisplay}/>
        <NavDropdown title="Contact Me" id="basic-nav-dropdown"> 
        <NavDropdown.Item Title="Email" href="mailto:spologas@gmail.com" />
        <NavDropdown.Item Title="LinkedIn" href="www.linkedin.com/in/erik-stone-33b2a661"/>
        </NavDropdown>
      </Navbar>

</div>
  );
}

export default MyNavbar;