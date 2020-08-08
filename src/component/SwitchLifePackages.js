import React,{Component} from 'react';
import RenderPackages from './RenderPackges';
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux';
import {fetchDishes} from './redux/actionCreator'

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
        fetchDishes();
     }

   render(){
     switch(this.state.itemId){
         case '1':
            return <RenderPackages cards={this.props.LiverPackages} name={"Liver Packages/Test"}/>
        case '2':
            return <RenderPackages cards={this.props.DiabetesPackages} name={"Diabetes Packages/Test"}/>  
        case '3':
            return <RenderPackages cards={this.props.KidneyPackages} name={"Kidney Packages/Test"}/>       
        case '4':
            return <RenderPackages cards={[]} name={"Lungs Packages/Test"}/>  
        case '5':
            return <RenderPackages cards={this.props.InfertilityPackages} name={"Infertility Packages/Test"}/>
        case '6':
            return <RenderPackages cards={[]} name={"CBC Packages/Test"}/>
        case '7':
            return <RenderPackages cards={this.props.HeartPackages} name={"Heart Packages/Test"}/>
        case '8':
            return <RenderPackages cards={this.props.ThyroidPackages} name={"Thyroid Packages/Test"}/>
        case '9':
            return <RenderPackages cards={this.props.AllergyPackages} name={"Allergy Packages/Test"}/>            
        default:
            return <RenderPackages cards={[]}/>   
     }
   }
}

export default withRouter(connect(mapStateToProps,fetchDishes)(SelectDisorder));