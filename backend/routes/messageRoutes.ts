import express from 'express';
import { handleMessage } from '../controllers/messageController';

const router = express.Router();

router.post('/message', handleMessage);

export default router;
