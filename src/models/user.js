import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    studentNumber: String,

    names: String,

    email: {
           type: String,
            unique: true,
           required: true },

    password: String,

    address: {
       state: String,
        city: String },

    phone: String,

    activity: {
      type:String,
enum:["Html","figma","typingmaster","backend","frontend"],
default:"Html"

},

status: {
  type:String,
  enum:["present","absent","communicated"],
  default:"present"

   },
   dateOn:{
    dateAt:Date,
           
       },

    role: {
       type: String,
        enum: ["student", "lecture","admin"],
         default: "admin" },

    createdBy:{
      type:mongoose.Schema.Types.ObjectId,
      ref:"Lecture",
  },  
    isActive: { type: Boolean, default: true },
  },
  
  { timestamps: true }
);



const User= mongoose.model("User", UserSchema);



export default User;
