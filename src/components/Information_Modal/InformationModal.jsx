import './InformationModal.css';
import { FaWindowClose, FaInfoCircle, FaBackward } from 'react-icons/fa';
import { useState } from 'react';

export function InformationModal({ children, className }){
    const [isOpen, setIsOpen] = useState(true);

    const toggleModal = () => {
        setIsOpen(!isOpen);
    }

    return(
       <div>
            {isOpen ? (
                <div className={`information-modal ${className}`}>
                    {/* <a className='view-degree-button' onClick={toggleModal}>
                        Close
                    </a> */}
                    {children}
                </div>
            ) : (
                <a className='view-degree-button information-modal__open-button' onClick={toggleModal}>
                    <FaInfoCircle size={25} />
                </a>
            )}
        </div>
    )

}

export default InformationModal;