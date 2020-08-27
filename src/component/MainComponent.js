import React , {Component} from 'react';
import Header from './HeaderComponent';
import Home from './HomeComponent'
import SwitchDisorder from './SwitchLifePackages';
import { Switch, Route, Redirect} from 'react-router-dom';
import About from './AboutComponent/About';
import Footer from './FooterComponent'


class Main extends Component{
    render(){
    return(
           <>
         <Header/>
         <Switch>
             <Route exact path='/' component={()=><Home/>}/>
             <Route path='/lifecycle/:itemId' component={SwitchDisorder}/>
             <Route exact path='/about' component={()=><About/>}/>
             <Redirect to="/" />
         </Switch>
         <Footer/>
           </>
       );
    }
}

export default Main;