import React,{Component} from 'react';
import { Navbar,Nav, NavbarToggler, Collapse, NavItem,NavLink} from 'reactstrap';


class Header extends Component {
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
                <Navbar dark expand="md">
                    <div className="container">
                        <NavbarToggler onClick={this.toggleNav} />
                         <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar >
                            <NavItem>
                                <NavLink className="nav-link font-weight-bold ml-4"  to='/home'>HOME</NavLink>
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

export default Header ;