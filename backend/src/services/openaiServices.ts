import { ChatCompletionRequestMessage } from 'openai';
import openai from '../utils/openaiConfig';

// Initialize a chatHistory with a system message
const chatHistory: ChatCompletionRequestMessage[] = [
  {
    role: 'system',
    content: 'You are a helpful assistant.',
  },
];

export async function generateChatResponse(message: string): Promise<string> {
  // We are going to add the user's message/prompt to the chat history
  chatHistory.push({
    role: 'user',
    content: message,
  });

  try {
    const completion = await openai.createChatCompletion({
      model: 'gpt-3.5-turbo',
      messages: chatHistory,
    });

    const response = completion.data.choices[0].message?.content as string;

    // Add the AI's response from the chatHistory as well
    chatHistory.push({
      role: 'assistant',
      content: response,
    });

    console.log(chatHistory);

    return response;
  } catch (error) {
    console.error(error);
    throw new Error('An error occurred while generating chat response.');
  }
}