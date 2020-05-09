import React from "react";

//const Action = (props) =>{
//     return(
//            
//            <div>
//               <button onClick={props.sendRandomNum} disabled={!props.hasOptions}>What should i do? Pick random option</button>
//            </div>
//        );
//        
//}



//removing implicit return and rewriting 

const Action = (props) => (
             <div>
               <button className="big-button" onClick={props.sendRandomNum} disabled={!props.hasOptions}>Pick Random Task</button>
            </div>
     );
        

export default Action;