import React, { useEffect, useState } from 'react';

const Popup = ({ title, description, onClose }) => {
    const [isVisible, setIsVisible] = useState(false);

    // Плавное появление через задержку
    useEffect(() => {
        setIsVisible(true);
    }, []);

    // Обработчик закрытия попапа с плавным исчезновением
    const handleClose = () => {
        setIsVisible(false);
        setTimeout(onClose, 300); // Таймер должен соответствовать времени в CSS
    };

    return (
        <div className={`popup ${isVisible ? 'popup-visible' : 'popup-hidden'}`}>
            <div className="popup-content">
                <button className="popup-close" onClick={handleClose}>×</button>
                <h2>{title}</h2>
                {Array.isArray(description) ? (
                    description.map((text, index) => <p key={index}>{text}</p>)
                ) : (
                    <p>{description}</p>
                )}
            </div>
        </div>
    );
};

export default Popup;
