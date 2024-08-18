import mongoose from "mongoose";

const plantSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },

  color: {
    type: String,
    require: true,
  },
  forEat: {
    type: String,
    required: true,
  },
});

export const Plant = mongoose.model("Plant", plantSchema);
