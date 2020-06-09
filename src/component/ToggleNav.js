import React,{Component} from 'react';
import $ from 'jquery';
import Media from 'react-media';
import SideBar from "./slideBar";


class ToggleNavbar extends Component {
    constructor(props) {
        super(props);
        this.state={
            width: '200px',
            height: '150px',
            position:'absolute',
            right:'25px',
            top:'45px',
            backgroundColor:'#2a93c9',
            display:'none',
            boxShadow: '0 8px 16px 0 rgba(0,0,0,0.4), 0 6px 20px 0 rgba(0,0,0,0.4)'
        }        
     this.openDiv=this.openDiv.bind(this)
    }
    
    componentDidMount(){
        $(document).mouseup(function(e){
            var container = $("#box");
            if(!container.is(e.target) && container.has(e.target).length === 0){
              {  container.hide();
                $('#fontAwesome').addClass('flash').delay(2000);
                 $('#fontAwesome').removeClass('fa fa-close fa-lg rotateIn');
                 $('#fontAwesome').addClass('fa fa-ellipsis-v fa-2x flash');
              }
            }
        });
    }   

    openDiv(box){
    if(box.display=="none")    
      this.setState({
       ...box,display:'block'
      })
     else
     this.setState({
         ...box,display:'none'
         }) 
    }

    render() {
        return(
            <>    
            <div className="burgerNav">
                <div style={{width:"50px" ,height:"50px"}}>
                  <SideBar pageWrapId={"page-wrap"} outerContainerId={"App"} />
                </div>
                <Media query='(min-width:415px)'>
                <div className="hamBurLogo">
                <img src="../assets/images/logo.png" width="80px" height="40px"/>
                </div> 
                </Media>
                <div className="actBtn" onClick={()=>this.openDiv(this.state)}> 
                <i id="fontAwesome" className={`${this.state.display=='block' ? 'fa fa-close fa-lg rotateIn' :'fa fa-ellipsis-v fa-2x flash'}`} 
                aria-hidden="true" type="button" style={{margin:'10px 20px',color:'white'}}/>
                </div>
                <div style={this.state} id="box">
                </div>
            </div> 
           </>       
        );

    }
}

export default ToggleNavbar ;