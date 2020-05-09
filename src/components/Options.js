import React from "react";
import Option from "./Option"; //Options component uses Option component, hence importing here, and is in the same folder, therefore only ./ in the filepath

//const Options = (props) => {
//    
//         return(
//          <div>
//              <button onClick={props.resettingOptions} disabled={!props.gotSomethingToWipe}>Wipe All</button>
//              <p>Here are your options</p>
//              <p>Here is the length: {props.allOptions.length}</p>
//              {props.allOptions.length===0 && <p>Start adding some options to get started</p>}
//              <ol>     
//                 {
//                     props.allOptions.map((option)=>{
//                     return  <Option key={option} 
//                                     optionText={option} 
//                                     deleteSingleOption={props.deleteSingleOption}
//                                     /* sending the received prop to option below using same prop name as from the parent component, can be given diff name as well */
//                             />
//                    })
//                 }
//     
//             </ol>   
//         </div>
//        );
//    
//    
//}

//removing implicit return and rewriting 


const Options = (props) =>(
          <div>
    
            <div className="widget-header">
              <h3 className="widget-header__title">Pending Tasks: {props.allOptions.length}</h3>
              <button className="button button--link" onClick={props.resettingOptions} disabled={!props.gotSomethingToWipe}>Complete All</button>
            </div>
    
             {props.allOptions.length===0 && <p className="widget__message">Please add some options to get started</p>}
            
                 {
                     props.allOptions.map((option, index)=>{
                     return  <Option key={option} 
                                     optionNum={index + 1}
                                     optionText={option} 
                                     deleteSingleOption={props.deleteSingleOption}
                                     /* sending the received prop to option below using same prop name as from the parent component, can be given diff name as well */
                             />
                    })
                 }
     
            
         </div>
        );


export default Options;