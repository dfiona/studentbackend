import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    studentNumber: String,

    names: String,

    email: { type: String, unique: true, required: true },

    password: String,

    address: { state: String, city: String },

    phone: String,

    attendance: String,

    

    role: { type: String, enum: ["student", "lecture","admin"], default: "admin" },

    isActive: { type: Boolean, default: true },
  },
  { timestamps: true }
);



const User= mongoose.model("User", UserSchema);



export default User;
