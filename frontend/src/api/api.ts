import axios from 'axios';

const backendUrl = import.meta.env.VITE_BACKEND_URL;

export const sendMessage = async (input: string): Promise<string> => {
  if (input.trim() === '') return '';

  try {
    const response = await axios.post(`${backendUrl}/message`, {
      message: input,
    });

    if (response.status === 200) {
      return response.data.response;
    } else {
      throw new Error('Failed to send message.');
    }
  } catch (error) {
    console.error(error);
    throw new Error('Failed to send message.');
  }
};
