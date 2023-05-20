import './index.css';
import React, { useState } from 'react';

const App = () => {
  const [messages, setMessages] = useState<string[]>([]);
  const [input, setInput] = useState<string>('');

  const sendMessage = () => {
    setMessages((prevMessages) => [...prevMessages, input]);
    setInput('');
  };

  // const handleInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
  //   setInput(e.target.value);
  //   e.target.style.height = 'auto';
  //   e.target.style.height = `${e.target.scrollHeight}px}`;
  // };

  return (
    <div className='flex flex-col justify-between min-h-screen bg-gray-800'>
      {/* <MessageList messages={messages} /> */}

      <div className='fixed bottom-0 left-0 w-full'>
        <div className='flex items-center justify-center py-4 px-2 bg-gray-800 w-11/12 mx-auto'>
          <textarea
            value={input}
            placeholder='Send a message.'
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                sendMessage();
              }
            }}
            style={{
              height: 'auto',
              minHeight: '48px', // Set a minimum height to prevent the textarea from collapsing completely
            }}
            className='w-full sm:w-3/6 px-4 py-2 border border-gray-800 rounded-md bg-gray-700 text-white resize-none overflow-hidden'
          />
        </div>
      </div>
    </div>
  );
};

export default App;
