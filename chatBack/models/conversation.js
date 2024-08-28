import mongoose, { Schema } from "mongoose";

const conversationSchema = new Schema({
    participants: [
        {type: mongoose.Schema.Types.ObjectId, ref: 'User'} //записує id співрозмовників
    ],
}, {
    timestamps: true,
});

const Conversation = mongoose.model('Conversation', conversationSchema);

export default Conversation