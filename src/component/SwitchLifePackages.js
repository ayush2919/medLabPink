import React,{Component} from 'react';
import RenderPackages from './RenderPackges';
import LiverPackages from './LifePackages'
import {items} from './LifeDisorder';

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
            return <RenderPackages cards={[]} name={"VitaminD Packages/Test"}/>  
        case '3':
            return <RenderPackages cards={[]} name={"Kidney Packages/Test"}/>       
        case '4':
            return <RenderPackages cards={[]} name={"Lungs Packages/Test"}/>  
        case '5':
            return <RenderPackages cards={[]} name={"Infertility Packages/Test"}/>
        case '6':
            return <RenderPackages cards={[]} name={"CBC Packages/Test"}/>
        case '7':
            return <RenderPackages cards={[]} name={"Heart Packages/Test"}/>
        case '8':
            return <RenderPackages cards={[]} name={"Thyroid Packages/Test"}/>
        case '9':
            return <RenderPackages cards={[]} name={"Allergy Packages/Test"}/>            
        default:
            return <RenderPackages cards={[]}/>   
     }
   }
}