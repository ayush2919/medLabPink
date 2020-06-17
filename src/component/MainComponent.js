import React , {Component} from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent'
import Home from './HomeComponent'
import RenderPackages from './RenderPackges';
import SwitchDisorder from './SwitchLifePackages';
import { Switch, Route, Redirect} from 'react-router-dom';

class Main extends Component{
    

    render(){
    
    const ayush=(props)=>{
      console.log(props)
      return(
            <></> )
        }    
    return(
           <>
         <Header/>
         <Switch>
             <Route exact path='/' component={()=><Home/>}/>
             <Route path='/lifestyle/:itemId' component={SwitchDisorder}/>
             <Redirect to="/" />
         </Switch>
         <Footer/>
           </>
       );
    }
}

export default Main;