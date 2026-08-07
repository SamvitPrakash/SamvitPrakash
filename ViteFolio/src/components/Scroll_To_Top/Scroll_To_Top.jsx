import './Scroll_To_Top.css';
import { FaArrowUp } from 'react-icons/fa';

export function ScrollToTopButton() {
    return(
        <div className='scroll-to-top-button-container'>
            <button className='skill-node lock-container scroll-to-top-button' onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} >
                <FaArrowUp className='scroll-to-top-icon' />
            </button>
        </div>

    )
}

export default ScrollToTopButton;