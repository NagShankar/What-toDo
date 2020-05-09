import React from "react";

import AddOption from "./AddOption"; //OR ./AddOption.js
import Header from "./Header"; //OR ./Header.js
import Action from "./Action"; //OR ./Action.js
import Options from "./Options"; //OR ./Options.js

//importing third party component
import OptionModal from "./OptionModal"; //OR ./OptionModal.js

class IndecisionApp extends React.Component{
    
    
    state={
        options:[],
        selectedOption: undefined
    }
    
    
    
//    constructor(props){
//        super(props);
//        this.handleDeleteOptions=this.handleDeleteOptions.bind(this);
//        this.selectRandomNum=this.selectRandomNum.bind(this);
//        this.handleAddOption=this.handleAddOption.bind(this);
//        this.handleSingleDeleteOption=this.handleSingleDeleteOption.bind(this);
//        
//       
//        this.state={
//             options:props.options
//           }
//        
//          }

 handleDeleteOptions = () => {
            this.setState(()=>({ 
                options:[] 
            }));
        };
 
   handleAddOption = (option) => {
       
       const upp=option.toString().toUpperCase();
       const res= this.state.options.map((item)=>{
                return item.toUpperCase();
              });
       
       
            //validation
            if(!option){ //if option doesnt exist
                return 'Hello, Looks like you forgot to enter an option!'
              }
              else if(this.state.options.indexOf(option)>-1 || res.includes(upp)){
                return 'Oops! Option already exist!'
               }
       
//             else if(res.includes(upp)){
//                return 'Duplicate value again'
//               }
       
       //OR....
       
//        else if (this.state.options.map(function(item){ return item.toLowerCase()} ).indexOf(option.toLowerCase()) != -1){
//           return 'Duplicate value hahaha'
//       }
//       
     
       
            
            else{
                 
                  this.setState((prevState)=>{
                    //prevState.options.push(option); //we shoundnt do this, cuz we're manipulating prevState directly by pushin new option, push basically alter original array, we shud use concat instead
                    return{
                        //options:prevState.options  //here we directly manipulated prevState and assgining it to Options array, which is actually origianl array, we should use concat instead

                        //using concat now
                        options:prevState.options.concat([option]) //or options:prevState.options.concat(option) - passing non array value, both give same result, and new array is returned, which is basic behaviour of concat to return new array
                       }
                  });
      
             }
    
        };
   
    //delete single option
      handleSingleDeleteOption = (optionToDelete) => {
        
          this.setState((prevState)=>({
              options:prevState.options.filter((option)=>{
                  return optionToDelete !== option //filter methods returns new array with the values which satisfies the condition to true, here prevState.options array's option SHOULD NOT match with option(optionToDelete) we want to delete, this is the condition, if this condition evaluates to true then add that item in returning array
                  
              })
          }));
          
      };
      
       
       selectRandomNum = () => {
           const randomNum=Math.floor(Math.random() * this.state.options.length);
           //alert (randomNum + " " +this.state.options[randomNum]);
           const option= (randomNum+1+".") + " " +this.state.options[randomNum];
           //now alerting from modal
           
           this.setState(()=>{
               return { selectedOption : option }
               
           });
           
       };

//modal closing method
closeModal = () => {
            this.setState(()=>({ 
                selectedOption: undefined
            }));
        };

//lifecycle methods usage 

    componentDidMount(){
        //use try catch for any wrong json format
         try{
            const getOptions=localStorage.getItem('allOptions');
            const options=JSON.parse(getOptions);
               if(options){
                   this.setState(()=>({options}));
                  } 
         }catch(e){
            //do nothing
         }
    };
    
    componentDidUpdate(prevProps,prevState){
        if(prevState.options.length !== this.state.options.length){
            const setOptions=JSON.stringify(this.state.options);
            localStorage.setItem('allOptions',setOptions);
            
        }
        
    };
    
   
  
    render(){
        //const titleText='Indicision App'; //now set as default prop
        const subTitleText='Daily tasks list using React';
        
        
        return(
         <div>
            <Header subtitle={subTitleText}/>
            
              <div className="container">
                  
                  <Action hasOptions={this.state.options.length>0} sendRandomNum={this.selectRandomNum}/>
                 
                    <div className="widget"> 
                         <Options allOptions={this.state.options} 
                                     resettingOptions={this.handleDeleteOptions} 
                                     gotSomethingToWipe={this.state.options.length>0} 
                                     deleteSingleOption={this.handleSingleDeleteOption}
                             />
                          <AddOption addingOption={this.handleAddOption}/>
                         </div> 

                       </div>
            
                <OptionModal sendingSelectedOption={this.state.selectedOption} closingModal={this.closeModal}/>
            
            </div>
        
        );
        
    }
    
    
}

//default empty options array
//IndecisionApp.defaultProps={
//    options:[]
//}

export default IndecisionApp;