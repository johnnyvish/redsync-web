import mongoose, { Schema } from "mongoose";

const dataPointSchema = new Schema(
  {
    value: Schema.Types.Mixed, // Allows for storing different types of data
    unit: String,
    date: {
      type: Date,
      default: Date.now,
    },
  },
  { _id: false }
);

const healthDataSchema = new Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    default: null,
  },
  syncCode: {
    type: String,
  },
  isActivated: { type: Boolean, default: false },
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  prePrompt: {
    type: String,
  },

  calorieIntake: [dataPointSchema],
  heartRate: [dataPointSchema],
  bloodOxygen: [dataPointSchema],
  dailySteps: [dataPointSchema],
  sleepData: [
    {
      averageDurationHours: dataPointSchema,
      frequentAwakenings: {
        value: Boolean,
        date: {
          type: Date,
          default: Date.now,
        },
      },
    },
  ],
  eveningBodyTemperature: [dataPointSchema],
  waistCircumference: [dataPointSchema],
  bloodPressure: [
    {
      systolic: dataPointSchema,
      diastolic: dataPointSchema,
    },
  ],
  bodyWeight: [dataPointSchema],
  bodyMassIndex: [dataPointSchema],
  waterIntake: [dataPointSchema],
  caffeineIntake: [dataPointSchema],
});

const HealthData =
  mongoose.models.HealthData || mongoose.model("HealthData", healthDataSchema);

export default HealthData;
