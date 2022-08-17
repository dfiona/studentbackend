import mongoose from "mongoose";

const studentSchema = new mongoose.Schema(
  {
    studentNumber: String,

    names: String,

    email: { type: String, unique: true, required: true },

    password: String,

    address: { state: String, city: String },

    phone: String,

    attendance: String,

    

    role: { type: String, enum: ["student", "lecture"], default: "lecture" },

    isActive: { type: Boolean, default: true },
  },
  { timestamps: true }
);



const student= mongoose.model("Student", studentSchema);



export default student;
