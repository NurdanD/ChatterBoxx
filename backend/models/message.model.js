import mongoose from 'mongoose';


//Mesaj şeması içinde gönderen, alıcı ve mesaj değişkenleri var.
const messageSchema = new mongoose.Schema({
    senderId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required:true
    },
    receiverId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required:true
    },
    message:{
        type: String,
        required:true
    }, 
    //Mesajın gönderilme zamanını anlık olarak almamızı sağlar.
}, {timestamps:true}
);

const Message =mongoose.model("Message", messageSchema);
export default Message;


