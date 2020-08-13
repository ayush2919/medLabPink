import React , {Component} from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent'
import Home from './HomeComponent'
import About from './AboutComponent/About'
import SwitchDisorder from './SwitchLifePackages';
import { Switch, Route, Redirect} from 'react-router-dom';

class Main extends Component{
    

    render(){
    return(
           <>
         <Header/>
         <Switch>
             <Route exact path='/' component={()=><Home/>}/>
             <Route exact path='/about' component={()=><About/>}/>
             <Route path='/lifecycle/:itemId' component={SwitchDisorder}/>
             {/* <Route path='/combo/:itemId' component={()=><Home/>}/> */}
             <Redirect to="/" />
         </Switch>
         <Footer/>
           </>
       );
    }
}

export default Main;