import React, { useEffect, useState } from 'react';

const Toast = ({ message, type, onClose }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (message) {
      setIsVisible(true);
      const timer = setTimeout(() => {
        setIsVisible(false);
        onClose();
      }, 3000); // Toast disappears after 3 seconds
      return () => clearTimeout(timer);
    }
  }, [message, onClose]);

  if (!isVisible) return null;

  const bgColor = type === 'success' ? 'bg-green-500' : 'bg-red-500';
  const textColor = 'text-white';

  return (
    <div className={`fixed bottom-4 left-1/2 transform -translate-x-1/2 p-4 rounded-lg shadow-lg flex items-center z-50 ${bgColor} ${textColor} transition-all duration-300 ease-in-out toast-animation`}>
      <span>{message}</span>
      <button onClick={onClose} className="ml-4 text-lg font-bold leading-none">
        &times;
      </button>
    </div>
  );
};

export default Toast;
