import mongoose from "mongoose";

const planetSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    circumference: {
      type: Number,
      required: true,
    },
    distanceFromSunKm: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

const planetModel = mongoose.model("planets", planetSchema)

export default planetModel