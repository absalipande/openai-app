import React from 'react';
import TypingEffect from './TypingEffect';

interface ChatMessageProps {
  message: string;
  sender: 'User' | 'AI';
}

const ChatMessage: React.FC<ChatMessageProps> = ({ message, sender }) => {
  const userImageUrl =
    'https://chat.openai.com/_next/image?url=https%3A%2F%2Fs.gravatar.com%2Favatar%2Fb276205eea6967af3036202c2c32acfd%3Fs%3D480%26r%3Dpg%26d%3Dhttps%253A%252F%252Fcdn.auth0.com%252Favatars%252Fse.png&w=48&q=75'; // User image URL
  const aiImageUrl = '/openai-logo.png'; // AI image URL

  return (
    <div className={`flex items-start mb-6`}>
      <img
        width={41}
        height={41}
        className='rounded-full mr-2'
        src={sender === 'User' ? userImageUrl : aiImageUrl}
        alt={sender}
      />
      <div
        className={`text-white py-2 px-4 rounded-md ${
          sender === 'AI' ? 'bg-AI' : 'bg-user'
        }`}
      >
        {sender === 'AI' ? <TypingEffect text={message} /> : message}
      </div>
    </div>
  );
};

export default ChatMessage;
