import { Request, Response } from 'express';
import { generateChatResponse } from '../services/openaiServices';

export async function handleMessage(
  req: Request,
  res: Response
): Promise<void> {
  const message = req.body.message;

  try {
    const response = await generateChatResponse(message);
    res.json({ response });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: 'An error occurred while processing the message.' });
  }
}
