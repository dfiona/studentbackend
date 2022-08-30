import mongoose from 'mongoose';
const lectureSchema = new mongoose.Schema({
    firstName:String,
    lastName:String,
    PhoneNumber:String,
    email:{
        type:String,
        unique:true,
        required:true
    },
    password:String,
    gender:{
        type:String,
        enum:["male","female","other"],
    },
    role:{
        type:String,
        enum:["user","admin"],
        default:"user"
    },
    Activity:{
        type:String,
        enum:["Html","figma","typingmaster","backend","frontend"],
        default:"Html"
            }

}, 
{timestamps:true});
const lecture = mongoose.model('Lecture',lectureSchema);
export default lecture;