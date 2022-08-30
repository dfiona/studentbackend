import mongoose from "mongoose";

const AttendanceSchema = new mongoose.Schema(
  {
    

    names: String,

    email: {
        type: String,
         unique: true,
        required: true },
 date:{
         dateAt:Date,
                
            },  
    Activity:{
        type:String,
        enum:["Html","figma","typingmaster","backend","frontend"],
        default:"Html"
            },       

     status:{
                type:String,
                enum:["present","communicated","absent"],
                default:"present"
              
            },
            role: 
    { type: String,
       enum: ["lecture", "student"], 
       default: "lecture" },
     createdBy:{
                type:mongoose.Schema.Types.ObjectId,
                ref:"Lecture",
            },        
  },
  
  { timestamps: true }
);
AttendanceSchema.pre(/^find/,function(next){
    this.populate({
        path:"createdBy",
        select:"email names"
    })
    next();
})
const Attendance= mongoose.model("Attendance", AttendanceSchema);

export default Attendance;
