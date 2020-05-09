import React from "react";

//const Option = (props) => {
//    
//      return(
//              <li>
//                   {props.optionText}
//                   <span> </span>
//                   <button 
//                            onClick={(e)=>{
//                                           props.deleteSingleOption(props.optionText)
//                                          }
//                                     }
//                     >
//                     Remove this option</button>
//          
//              </li>
//           );
//    
//}


//removing implicit return and rewriting 
const Option = (props) => (
              <div className="option">
                   <p className="option__text">{props.optionNum}. {props.optionText}</p>
                   <button className="button button--link"
                            onClick={(e)=>{
                                           props.deleteSingleOption(props.optionText)
                                          }
                                     }
                     >
                     Done?</button>
          
              </div>
           );


export default Option;