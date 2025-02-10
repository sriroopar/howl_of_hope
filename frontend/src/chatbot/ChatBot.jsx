import { useState } from "react";
import '../styles/chatbot.css'
import wolf from '../assets/wolf.jpeg';

function Chatbot() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="chatbot-container">
            {isOpen && (
                <div className="chatbot-iframe-container">
                    <iframe
                        src="http://localhost:8501"
                        className="chatbot-iframe"
                    ></iframe>
                </div>
            )}
            <button onClick={() => setIsOpen(!isOpen)} className="chatbot-button">
                <img src={wolf} />
            </button>
        </div>
    );
}

export default Chatbot