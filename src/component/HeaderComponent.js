import React,{Component,Suspense,lazy} from 'react';
import TopFixNav from './TopFixNav';
import Media from 'react-media';
import {NavLink} from 'react-router-dom';
import { Navbar,Nav, NavbarToggler, Collapse, NavItem} from 'reactstrap';

const Appoint = lazy(()=> import('./MakeAppointMent'))

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
                         <div className="">    
                         <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar>
                             <div>   
                            <NavItem>
                                <NavLink className="nav-link font-weight-bold active"  to='/'>HOME</NavLink>
                            </NavItem>
                            </div>
                            <div>
                            <NavItem>
                                <NavLink className="nav-link font-weight-bold active" to='/about'>ABOUT</NavLink>
                            </NavItem>
                            </div>
                            <div>
                            <NavItem>
                            <a className="nav-link font-weight-bold active" href="./about/#team">TEAM</a>
                            </NavItem>
                            </div>
                            <div>
                            <NavItem>
                            <a className="nav-link font-weight-bold active" href="../#healthcare">HEALTHCARE</a>
                            </NavItem>
                            </div>
                            <div>
                            <NavItem>
                            <a className="nav-link font-weight-bold active" href="../#report">REPORTS</a>
                            </NavItem>
                            </div>
                            <div>
                            <NavItem>
                            <a className="nav-link font-weight-bold active" href="../#lifecycle">LIFECYCLE</a>
                            </NavItem>
                            </div>
                            <div>
                            <NavItem>
                            <a className="nav-link font-weight-bold active" href="/">APPOINTMENT</a>
                            </NavItem>
                            </div>
                            <div>
                            <NavItem>
                            <a className="nav-link font-weight-bold active" href="#contact">CONTACTS</a>
                            </NavItem>
                            </div>
                            </Nav>
                        </Collapse> 
                         </div>    
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
                  {/* <img src="../assets/images/phone.png"  id="medlabPhone" alt="Contact-No."/> */}
                  <div className="carouselDiv">
                  <div  className="homeLogo">  
                  <img src="../assets/images/medLogo.png" alt="MedLab"/>
                   </div>
                  <div className="medlabPhone">
                  <i className="fa fa-phone fa-2x mt-3" aria-hidden="true"></i>
                  </div>
                  <div className="medlabPhoneNo"> 
                  <a href="tel:+919369641109" className="text-white"> +91-936-964-1109</a><br/>
                  <a href="tel:+919161157505" className="text-white"> +91-916-115-7505</a>
                  </div>
                  <div className="medlabMap ">
                  <a href="https://goo.gl/maps/LcwPZhpLMPhGnBiY6">
                        <i className="fa fa-2x fa-map-marker mt-3"/>
                      </a>
                  </div>
                  <div className="medlabAdd">
                  <a href="https://goo.gl/maps/LcwPZhpLMPhGnBiY6">    
                  <span className="text-white">RZ/D-49,Nangli Vihar<br/>New Delhi</span></a>
                  </div>    
                  <div className="medlabPhoneNo"> 
                  <a href="tel:+919369641109" className="text-white"> +91-936-964-1109</a><br/>
                  <a href="tel:+919161157505" className="text-white"> +91-916-115-7505</a>
                  </div>
                  <div className={`${this.state.scroll>(window.screen.height)/5? 'flash fixed-top navScreenSize': 'navBar col-10'}`}>
                    <NavBar/>
                  </div>
                  <Suspense fallback={<div>Loading</div>}>  
                  <div className="Appoint">
                  <Appoint/>
                  </div>
                  </Suspense>
                  </div>    
                </div>
                </Media>
                <Media query="(max-width:1289px)"> 
                   <div>
                       <TopFixNav/>
                    <Suspense fallback={<div>Loading</div>}>   
                    <div className="appointDiv"> 
                    <div className="appointExt">  
                    <Appoint/>
                    </div>
                    </div> 
                    </Suspense> 
                    </div>  
                </Media>
                
             </div> 
        )
    }
}
export default Header ;