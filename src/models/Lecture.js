import mongoose from "mongoose";

const lectureSchema = new mongoose.Schema(
  {
    

    names: String,

    email: { type: String, unique: true, required: true },

    password: String,


    role: { type: String, enum: ["admin", "lecture"], default: "lecture" },

    isActive: { type: Boolean, default: true },
  },
  { timestamps: true }
);



const lecture= mongoose.model("lecture", lectureSchema);



export default lecture;
