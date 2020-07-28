import React,{Component} from 'react';
import RenderPackages from './RenderPackges';
import KidneyPackages from '../data/KidneyTest';
import LiverPackages from '../data/LiverTest';
import HeartPackages from '../data/HeartTest';
import InfertilityPackages from '../data/InfertilityTest';
import ThyroidPackages from '../data/ThyroidTest';
import DiabetesPackages from '../data/DiabetesTest';
import AllergyPackages from '../data/AllergyTest';

export default class SelectDisorder extends Component{
    
    constructor(props){
        super(props)
        
        this.state={
            itemId:props.match.params.itemId
        }
    }
   render(){
     switch(this.state.itemId){
         case '1':
            return <RenderPackages cards={LiverPackages} name={"Liver Packages/Test"}/>
        case '2':
            return <RenderPackages cards={DiabetesPackages} name={"Diabetes Packages/Test"}/>  
        case '3':
            return <RenderPackages cards={KidneyPackages} name={"Kidney Packages/Test"}/>       
        case '4':
            return <RenderPackages cards={[]} name={"Lungs Packages/Test"}/>  
        case '5':
            return <RenderPackages cards={InfertilityPackages} name={"Infertility Packages/Test"}/>
        case '6':
            return <RenderPackages cards={[]} name={"CBC Packages/Test"}/>
        case '7':
            return <RenderPackages cards={HeartPackages} name={"Heart Packages/Test"}/>
        case '8':
            return <RenderPackages cards={ThyroidPackages} name={"Thyroid Packages/Test"}/>
        case '9':
            return <RenderPackages cards={AllergyPackages} name={"Allergy Packages/Test"}/>            
        default:
            return <RenderPackages cards={[]}/>   
     }
   }
}