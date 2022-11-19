import React from 'react';

const ConfirmationModal = ({ title, message, successButtonName, closeModal, modalData, successAction }) => {
    /*
    * title is the title of the modal (you can either send the dynamic data or static data) 
    * message is the message you want to show on modal
    * SuccessButtonName is the name of the confirm button.
    * closeModal is the handler function to close the modal
    * modelData is the specific data id or information so we know which dat ais being deleted
    * successAction is the handler function for the action if the user confirms
     */
    return (
        <div>
            <input type="checkbox" id="confirmation-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">{title}</h3>
                    <p className="py-4">{message}</p>
                    <div className="modal-action">
                        <label
                            onClick={() => successAction(modalData)}
                            htmlFor="confirmation-modal"
                            className="btn btn-primary">{successButtonName}</label>
                        <button onClick={closeModal} className='btn btn-outline'>cancel</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ConfirmationModal;