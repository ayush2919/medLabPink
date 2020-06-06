import React,{Component} from 'react';
import { Navbar,Nav, NavbarToggler,Container, Collapse, NavItem,NavLink,Col,Row} from 'reactstrap';


class ToggleNavbar extends Component {
    constructor(props) {
        super(props);

        this.toggleNav = this.toggleNav.bind(this);
        
        this.state = {
            isNavOpen: false,
        };
        
      }
 
      toggleNav() {
        this.setState({
          isNavOpen: !this.state.isNavOpen
        });
      }

    render() {
        return(
            <div>
                <Navbar dark expand={false} className="bg-primary fixed-top">
                    <div className="container">
                    <Container>
                        <Row>
                            <Col md={3}>
                            <NavbarToggler onClick={this.toggleNav}/> 
                            </Col>
                            <Col md={3}>
                            <img src="../assets/images/logo.png" width="90px" alt="MedLab"/>                           
                            </Col>
                            </Row>
                        </Container> 
                         <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar >
                            <NavItem>
                                <NavLink className="nav-link font-weight-bold"  to='/home'>HOME</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link font-weight-bold" to='/aboutus'>ABOUT US</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link font-weight-bold" to='/aboutus'>TEAM</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link font-weight-bold" to='/aboutus'>TIMETABLE</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link font-weight-bold" to='/aboutus'>PACKAGES</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link font-weight-bold" to='/aboutus'>BUY PACKAGES</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link font-weight-bold"  to='/menu'>CENTER LOCATOR</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link font-weight-bold" to='/contactus'>CONTACT US</NavLink>
                            </NavItem>
                            </Nav>
                        </Collapse>
                    </div>   
                </Navbar>
            </div>
        );
    }
}

export default ToggleNavbar ;