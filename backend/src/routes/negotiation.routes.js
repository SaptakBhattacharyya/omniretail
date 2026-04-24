import express from 'express';
import {
  getNegotiations,
  getNegotiationById,
  sendMessage,
  acceptNegotiation,
  rejectNegotiation,
} from '../controllers/negotiation.controller.js';
import { protect } from '../middlewares/auth.middleware.js';

const router = express.Router();

router.get('/', protect, getNegotiations);
router.get('/:id', protect, getNegotiationById);
router.post('/:id/message', protect, sendMessage);
router.put('/:id/accept', protect, acceptNegotiation);
router.put('/:id/reject', protect, rejectNegotiation);

export default router;
