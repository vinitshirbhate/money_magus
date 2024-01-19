import React, { useRef, useEffect, useState } from 'react';

const ChatBot = () => {
  const chatBotRef = useRef();
  const [chatBotVisible, setChatBotVisible] = useState(false);

  const handleChatBot = () => {
    // Toggle the visibility of the ChatBot container
    setChatBotVisible((prevVisible) => !prevVisible);
  };

  useEffect(() => {
    // Initialize any scripts or components that need to run when the component mounts
    // For example, loading the Zapier interfaces script
    const script = document.createElement('script');
    script.type = 'module';
    script.src = 'https://interfaces.zapier.com/assets/web-components/zapier-interfaces/zapier-interfaces.esm.js';
    document.head.appendChild(script);

    // Cleanup function to remove the script when the component unmounts
    return () => {
      document.head.removeChild(script);
    };
  }, []); // Empty dependency array ensures the effect runs only once on mount

  return (
    <div className="chatBotContainer ">
      <script type="module" src="https://interfaces.zapier.com/assets/web-components/zapier-interfaces/zapier-interfaces.esm.js"></script>
      <zapier-interfaces-page-embed
        ref={chatBotRef}
        id="chatbotContainer"
        page-id="cloblcdn40016mc0o54gt9q4a"
        no-background="false"
        style={{ display: chatBotVisible ? 'block' : 'none', transform: 'scale(0)', maxWidth: '50px', height: '50px' }}
      ></zapier-interfaces-page-embed>
      <script type="module" src="https://interfaces.zapier.com/assets/web-components/zapier-interfaces/zapier-interfaces.esm.js"></script>
      <button onClick={handleChatBot} id="actionBtn">
        {chatBotVisible ? 'Hide ChatBot' : 'Show ChatBot'}
      </button>
    </div>
  );
};

export default ChatBot;
