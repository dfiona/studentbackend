import mongoose from "mongoose";

const PermissionSchema = new mongoose.Schema(
  {
    

    date:{
      dateAt:Date,
             
         },
    email: { type: String, 
             unique: true, 
             required: true },


    role: 
    { type: String,
       enum: ["admin", "student"], 
       default: "student" },

   
  },
  { timestamps: true }
);

const Permission= mongoose.model("Permission",PermissionSchema);

export default Permission;
