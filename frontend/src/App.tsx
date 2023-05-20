import './index.css';
import { useState, useEffect, useRef } from 'react';
import ChatMessage from './components/ChatMessage';

const App = () => {
  const [messages, setMessages] = useState<string[]>([]);
  const [input, setInput] = useState<string>('');
  const messagesRef = useRef<HTMLDivElement>(null);

  const sendMessage = async () => {
    if (input.trim() === '') return;

    setMessages([...messages, input]);
    setInput('');

    try {
      const response = await fetch('http://localhost:3060/message', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: input }),
      });

      if (response.ok) {
        const data = await response.json();
        setMessages((prevMessages) => [...prevMessages, data.response]);
      } else {
        throw new Error('Failed to send message.');
      }
    } catch (error) {
      console.error(error);
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

  // const userImageUrl =
  //   'https://chat.openai.com/_next/image?url=https%3A%2F%2Fs.gravatar.com%2Favatar%2Fb276205eea6967af3036202c2c32acfd%3Fs%3D480%26r%3Dpg%26d%3Dhttps%253A%252F%252Fcdn.auth0.com%252Favatars%252Fse.png&w=48&q=75';
  // const aiImageUrl = '/openai-logo.png';

  return (
    <div className='flex flex-col justify-between min-h-screen bg-gray-800'>
      <div className='flex flex-col mt-10 mx-4 md:mx-auto md:max-w-4xl mb-20'>
        <div ref={messagesRef} className='overflow-y-auto'>
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
                sendMessage();
              }
            }}
            className='w-full sm:w-3/6 px-4 py-2 border border-gray-800 rounded-md bg-gray-700 text-white resize-none overflow-hidden'
          />
        </div>
      </div>
    </div>
  );
};

export default App;
