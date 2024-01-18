import React, { useState } from 'react';

const ChatBot = ({ className }) => {
  const [isChatBotOpen, setChatBotOpen] = useState(false);

  const handleChatBot = () => {
    const chatbotContainer = document.getElementById('chatbotContainer');
    const actionBtn = document.getElementById('actionBtn');

    if (!isChatBotOpen) {
      actionBtn.innerText = 'close';
      actionBtn.style.position = 'absolute';
      actionBtn.style.top = '0';
      actionBtn.style.left = '0';
      actionBtn.style.bottom = 'initial';
      actionBtn.style.right = 'initial';
      chatbotContainer.style.transition = '200ms';
      chatbotContainer.style.transform = 'scale(1)';
      chatbotContainer.style.minWidth = '500px';
    } else {
      chatbotContainer.style.transition = '1ms';
      actionBtn.style.position = 'absolute';
      actionBtn.style.bottom = '0';
      actionBtn.style.right = '0';
      actionBtn.style.top = 'initial';
      actionBtn.style.left = 'initial';
      actionBtn.innerText = 'ChatBot';
      chatbotContainer.style.transform = 'scale(0)';
    }

    setChatBotOpen(!isChatBotOpen);
  };

  return (
    <div className={`chatBotContainer ${className}`}>
      {/* You may want to replace the following script with a React way of handling external scripts */}
      <script type="module" src="https://interfaces.zapier.com/assets/web-components/zapier-interfaces/zapier-interfaces.esm.js"></script>

      {/* The zapier-interfaces-page-embed element */}
      <zapier-interfaces-page-embed
        id="chatbotContainer"
        page-id="cloblcdn40016mc0o54gt9q4a"
        no-background="false"
        style={{
          display: 'none',
          transform: 'scale(0)',
          maxWidth: '900px',
          height: '500px',
        }}
      ></zapier-interfaces-page-embed>

      {/* The button */}
      <button onClick={handleChatBot} id="actionBtn">
        ChatBot
      </button>
    </div>
  );
};

export default ChatBot;
