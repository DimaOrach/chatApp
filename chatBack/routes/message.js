import express from 'express';
import verifyUser from '../middleware/verifyUser.js';
import Conversation from '../models/conversation.js';
import Message from '../models/message.js';

const router = express.Router();

router.post('/send/:receiverId', verifyUser, async (req, res) => {
    try{
        const receiverId = req.params.receiverId; // якщо тут req.params - помилка

    const senderId = req.user._id;
    const {content} = req.body;

    let conversation = await Conversation.findOne({
        participants: {$all: [senderId, receiverId]}
    });

    if(!conversation) {
        conversation = new Conversation({
            participants: [senderId, receiverId]
        });
        await conversation.save();
    }

    const newMessage = new Message({
        conversationId: conversation._id,
        sender: senderId,
        content: content,
        createdAt: new Date()
    });

    await newMessage.save();
    return res.json(newMessage);
    
} catch(error) {
    console.log(error);
    res.status(500).json(error);
}
    
});

export default router;
