import mongoose from "mongoose";

const permissionSchema = new mongoose.Schema(
  {
    

    names: String,

    email: { type: String, unique: true, required: true },

    password: String,

    address : String,


    role: { type: String, enum: ["lecture", "admin"], default: "admin" },

    isActive: { type: Boolean, default: true },
  },
  { timestamps: true }
);



const permission= mongoose.model("permission", permissionSchema);



export default permission;
