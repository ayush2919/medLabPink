import React , {Component,Suspense,lazy} from 'react';
import Header from './HeaderComponent';
import Home from './HomeComponent'
import SwitchDisorder from './SwitchLifePackages';
import { Switch, Route, Redirect} from 'react-router-dom';

const About = lazy(()=> import('./AboutComponent/About'))
const Footer = lazy(()=> import('./FooterComponent'))

class Main extends Component{
    render(){
    return(
           <>
         <Header/>
         <Switch>
             <Route exact path='/' component={()=><Home/>}/>
             <Route path='/lifecycle/:itemId' component={SwitchDisorder}/>
             <Suspense fallback={<div>Loading</div>}>
             <Route exact path='/about' component={()=><About/>}/>
             </Suspense>
             <Redirect to="/" />
         </Switch>
         <Suspense fallback={<div>Loading</div>}>
         <Footer/>
         </Suspense>
           </>
       );
    }
}

export default Main;