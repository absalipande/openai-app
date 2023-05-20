import { useEffect, useState, useRef } from 'react';

const TypingEffect = ({ text }: { text: string }) => {
  const [displayText, setDisplayText] = useState('');
  const typingRef = useRef<number | null>(null);
  const typingSpeed = 30; // Adjust the typing speed as needed

  useEffect(() => {
    let currentIndex = 0;

    const typeNextCharacter = () => {
      if (currentIndex < text.length) {
        setDisplayText((prevText) => prevText + text.charAt(currentIndex));
        currentIndex++;
        typingRef.current = window.setTimeout(typeNextCharacter, typingSpeed);
      }
    };

    typeNextCharacter();

    return () => {
      // Cleanup function to cancel the typing effect if component unmounts
      if (typingRef.current) {
        clearTimeout(typingRef.current);
      }
    };
  }, [text]);

  return <>{displayText}</>;
};

export default TypingEffect;
