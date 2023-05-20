import './index.css';
import { useState, useEffect, useRef } from 'react';
import ChatMessage from './components/ChatMessage';
import { sendMessage } from './api/api';
import ErrorMessage from './components/ErrorMessage';

const App = () => {
  const [messages, setMessages] = useState<string[]>([]);
  const [input, setInput] = useState<string>('');
  const [error, setError] = useState<string>('');
  const messagesRef = useRef<HTMLDivElement>(null);

  const sendMessageHandler = async () => {
    if (!input.trim()) return;

    setMessages([...messages, input]);
    setInput('');
    setError('');

    try {
      const response = await sendMessage(input);
      setMessages((prevMessages) => [...prevMessages, response]);
    } catch (error) {
      console.error(error);
      setError('Failed to send message. Please try again.');
    }
  };

  const handleInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInput(e.target.value);
    e.target.style.height = 'auto';
    e.target.style.height = `${e.target.scrollHeight}px`;
  };

  useEffect(() => {
    if (messagesRef.current && messagesRef.current.lastChild) {
      (messagesRef.current.lastChild as HTMLDivElement).scrollIntoView({
        behavior: 'smooth',
      });
    }
  }, [messages]);

  return (
    <div className='flex flex-col justify-between min-h-screen bg-gray-800'>
      <div className='flex flex-col mt-10 mx-4 md:mx-auto md:max-w-4xl mb-20'>
        <div ref={messagesRef} className='overflow-y-auto mb-4'>
          {messages.map((message, index) => (
            <ChatMessage
              key={index}
              message={message}
              sender={index % 2 === 0 ? 'User' : 'AI'}
            />
          ))}
        </div>
      </div>

      <div className='fixed bottom-0 left-0 w-full'>
        <div className='flex items-center justify-center py-4 px-2 bg-gray-800 w-11/12 mx-auto'>
          <textarea
            value={input}
            placeholder='Send a message.'
            onChange={handleInput}
            onKeyDown={(e) => {
              if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                sendMessageHandler();
              }
            }}
            className='w-full sm:w-3/6 px-4 py-2 border border-gray-800 rounded-md bg-gray-700 text-white resize-none overflow-hidden'
          />
        </div>
        <ErrorMessage error={error} />
      </div>
    </div>
  );
};

export default App;
