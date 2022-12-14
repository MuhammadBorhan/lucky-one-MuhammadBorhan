import React from 'react';
import Modal from 'react-modal';
import './Choosemodal.css'

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};
Modal.setAppElement('#root');


const Choosemodal = ({ random }) => {
    let subtitle;
    const [modalIsOpen, setIsOpen] = React.useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function afterOpenModal() {
        // references are now sync'd and can be accessed.
        // subtitle.style.color = '#f00';
    }

    function closeModal() {
        setIsOpen(false);
    }
    return (
        <div>
            <button className='modal-button' onClick={openModal}>CHOOSE 1 FOR ME</button>
            <Modal
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <button className='modal-btn-times' onClick={closeModal}>close</button>
                <div className='modal-heading'>
                    <h4>{random.name}</h4>
                </div>
            </Modal>
        </div>
    );
};

export default Choosemodal;