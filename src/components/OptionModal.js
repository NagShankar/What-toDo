import React from "react";
//import ReactDOM from "react-dom";
import Modal from "react-modal";

//const OptionModal = () => {
//   return (
//      <div>
//         some dummy text
//        </div>
//   ); 
//    
//}

//OR.................... shortened by removing implicit return, we can do this when the function not doing anything else but just returning only

Modal.setAppElement('#app');

const OptionModal = (props) => (
      //<div>some dummy text from modal to test</div>
       <Modal
          isOpen={!!props.sendingSelectedOption}
          onRequestClose={props.closingModal}
          contentLabel="Example Modal -  Seleced Option"
          closeTimeoutMS={200}
          className="custom_modal_style"
        >
             <h3 className="custom_modal_style__title">Selected Option</h3>
             { props.sendingSelectedOption && <p className="custom_modal_style__body">{props.sendingSelectedOption}</p> }
    <button className="button" onClick={props.closingModal}>Okay</button>
        
     </Modal>
   ); 
    



export default OptionModal;