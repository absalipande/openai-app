import express from 'express';
import { handleMessage } from '../controllers.ts/messageController';

const router = express.Router();

router.post('/message', handleMessage);

export default router;
