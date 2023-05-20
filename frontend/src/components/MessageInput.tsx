type MessageInputProps = {
  value: string;
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onKeyDown: (e: React.KeyboardEvent<HTMLTextAreaElement>) => void;
};

const MessageInput: React.FC<MessageInputProps> = ({
  value,
  placeholder,
  onChange,
  onKeyDown,
}) => {
  return (
    <textarea
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      onKeyDown={onKeyDown}
      className='w-full sm:w-3/6 px-4 py-2 border border-gray-800 rounded-md bg-gray-700 text-white resize-none overflow-hidden'
    />
  );
};

export default MessageInput;
