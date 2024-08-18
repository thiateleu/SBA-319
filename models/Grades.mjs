import mongoose from "mongoose";

const gradeSchema = new mongoose.Schema({
  studentName: {
    type: String,
    required: true,
    ref: "User",
  },
  Type: String,
  score: {
    type: Number,
    required: true,
  },
  score: {
    type: String,
    required: true,
  },
});

export const Grade = mongoose.model("Grade", gradeSchema);
