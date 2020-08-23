import React,{Component} from 'react';
import TopFixNav from './TopFixNav';
import Media from 'react-media';
import {NavLink} from 'react-router-dom';
import { Navbar,Nav, NavbarToggler, Collapse, NavItem} from 'reactstrap';

class NavBar extends Component {
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
                                <NavLink className="nav-link font-weight-bold ml-5 active"  to='/'>HOME</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link font-weight-bold active" to='/about'>ABOUT US</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link font-weight-bold active" to='/aboutus'>TEAM</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link font-weight-bold active" to='/aboutus'>TIMETABLE</NavLink>
                            </NavItem>
                            <NavItem>
                            <a className="nav-link font-weight-bold active" href="../#packages">PACKAGES</a>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link font-weight-bold active" to='/aboutus'>BUY PACKAGES</NavLink>
                            </NavItem>
                            <NavItem>
                            <a className="nav-link font-weight-bold active" href="../#lifecycle">LIFECYCLE</a>
                            </NavItem>
                            <NavItem>
                            <a className="nav-link font-weight-bold active" href="#contact">CONTACT US</a>
                            </NavItem>
                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>
            </div>
        );
    }
}


class Header extends Component{
    constructor(props){
        super(props);
        this.state={
            scroll:0
        }
       this.handleScroll=this.handleScroll.bind(this)
    }
    
    handleScroll(){
        //console.log(window.scrollY);
        this.setState({
            scroll:window.scrollY
        })
    }
    
    componentDidMount(){
      window.addEventListener("scroll",this.handleScroll,true);
    }
    render(){
        return(
            <div className="medlab">
            <Media query="(min-width:1290px)"> 
                <div>
                   <div  className="offset-1 mt-5">  
                  <img src="../assets/images/medLogo.png" className="homeLogo" alt="MedLab"/>
                   </div>
                  <div className="medlabPhone">
                  <i className="fa fa-phone fa-2x mt-3" aria-hidden="true"></i>
                  </div>
                  {/* <img src="../assets/images/phone.png"  id="medlabPhone" alt="Contact-No."/> */}
                  <div id="medlabPhoneNo"> 
                  <a href="tel:+919369641109" className="text-white"> +91-936-964-1109</a><br/>
                  <a href="tel:+919161157505" className="text-white"> +91-916-115-7505</a>
                  </div>
                  <div className={`${this.state.scroll>(window.screen.height)/5? 'flash fixed-top navScreenSize ': 'navBar navShort'}`}>
                    <NavBar/>
                  </div>
                </div>
                </Media>
                <Media query="(max-width:1289px)">
                  <TopFixNav/>
                </Media>
             </div> 
        )
    }
}
export default Header ;