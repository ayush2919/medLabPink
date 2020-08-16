import React,{Component} from 'react';
import RenderPackages from './RenderPackges';
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux';
import {fetchLifeCycle} from './redux/actionCreator'

// import { baseUrl } from '../component/redux/baseUrl';

const mapStateToProps = state => {
    return {
        KidneyPackages: state.kidney,
        LiverPackages: state.liver,
        HeartPackages: state.heart,
        InfertilityPackages: state.infertility,
        ThyroidPackages: state.thyroid,
        DiabetesPackages: state.diabetes,
        AllergyPackages: state.allergy
    }
  }

class SelectDisorder extends Component{
    
    constructor(props){
        super(props)
        
        this.state={
            itemId:props.match.params.itemId
        }
    }
    componentDidMount() {
        console.log("fetchesDishes");
        // console.log("ayush");
         fetchLifeCycle();
     }

   render(){
     switch(this.state.itemId){
         case '1':
            return <RenderPackages cards={this.props.LiverPackages.liver} err={this.props.LiverPackages.errMess} name={"Liver Packages/Test"}/>
        case '2':
            return <RenderPackages cards={this.props.DiabetesPackages.diabetes} err={this.props.DiabetesPackages.errMess} name={"Diabetes Packages/Test"}/>  
        case '3':
            return <RenderPackages cards={this.props.KidneyPackages.kidney} err={this.props.KidneyPackages.errMess} name={"Kidney Packages/Test"}/>       
        case '4':
            return <RenderPackages cards={[]} name={"Lungs Packages/Test"}/>  
        case '5':
            return <RenderPackages cards={this.props.InfertilityPackages.infertility} err={this.props.InfertilityPackages.errMess} name={"Infertility Packages/Test"}/>
        case '6':
            return <RenderPackages cards={[]} name={"CBC Packages/Test"}/>
        case '7':
            return <RenderPackages cards={this.props.HeartPackages.heart} err={this.props.HeartPackages.errMess} name={"Heart Packages/Test"}/>
        case '8':
            return <RenderPackages cards={this.props.ThyroidPackages.thyroid} err={this.props.ThyroidPackages.errMess} name={"Thyroid Packages/Test"}/>
        case '9':
            return <RenderPackages cards={this.props.AllergyPackages.allergy} err={this.props.AllergyPackages.errMess} name={"Allergy Packages/Test"}/>            
        default:
            return <RenderPackages cards={[]}/>   
     }
   }
}

export default withRouter(connect(mapStateToProps,fetchLifeCycle)(SelectDisorder));