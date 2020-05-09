import React from "react";

class AddOption extends React.Component{
    
    state={
       error:undefined  
    }
    
    //using constructor here since we're using props inside addOption method and we need to bind this
//    constructor(props){
//        super(props);
//        this.addOption=this.addOption.bind(this);
//        
//          //receiving error
//                //        this.state={
//                //            error:undefined   //by default its undefined, in other words false
//                //        }
//        
//    }
//    

    addOption = (e) => { //converted to arrow function syntax
       
        e.preventDefault();
        
        //console.log(testingggggggg); //for source map testing
        
        const option=e.target.elements.option.value.trim();//trimming out empty spaces
        
        const whatsTheOutput=this.props.addingOption(option);
        
        //setting error, if any
        this.setState(()=>({error:whatsTheOutput}));
        
        if(!whatsTheOutput){
            e.target.elements.option.value='';//emptying the input box if there is no error like duplicate submit or no values
          }
        

    };

//remove error on input box empty
 removeError= (e) => {
    if(e.target.value===""){
     this.setState(()=>({error:undefined}));  
    }
     
 }
 
 
    render(){
        
        return (
          <div>
            {/* this will display only if there's an error*/}
             {this.state.error && <p className="add-option-error">{this.state.error}</p>}
            
            <form className="add-option" onSubmit={this.addOption}>
                <input className="add-option__input" type="text" name="option" onChange={this.removeError}/>
                 <button className="button">Add Task</button>
            </form>
          
            </div>
        );
        
    }
    
}


export default AddOption;