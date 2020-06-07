import React,{Component} from 'react';
import { Navbar, NavItem} from 'reactstrap';
import SideBar from "./slideBar";


class ToggleNavbar extends Component {
    constructor(props) {
        super(props);        
      }
    render() {
        return(
            <>
            <div className="burgerNav fixed-top">
             <SideBar pageWrapId={"page-wrap"} outerContainerId={"App"} />
              <div className="">
                  <img src="../assets/images/logo.png" width="70px" height="50px"/>
                </div>  
             </div>
            
           </>       
        );
    }
}

export default ToggleNavbar ;