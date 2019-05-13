import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => {
    // These stateless functional components can be implicitly returned instead 
    // of using return explicitly.    
    return (
        <Modal
            isOpen={props.onItemRemove}
            onRequestClose={props.onHandleClosingModal}
            contentLabel="Deleting expense"
            closeTimeoutMS= {200}
            className="modal"
        >
            <h3 className= "modal__body">Are you sure you want to delete the expense?</h3>
            <button className="button modal__button" onClick = {props.onHandleRemoval} >Yes</button>
            <button className="button" onClick = {props.onHandleClosingModal} >No</button>
        </Modal>
    )
}

export default OptionModal;