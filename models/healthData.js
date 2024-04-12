import mongoose, { Schema } from "mongoose";

const healthDataSchema = new Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    default: null,
  },
  syncCode: {
    type: String,
    required: true,
    unique: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  data: {
    type: String,
    required: true,
  },
});

const HealthData =
  mongoose.models.HealthData || mongoose.model("HealthData", healthDataSchema);

export default HealthData;
