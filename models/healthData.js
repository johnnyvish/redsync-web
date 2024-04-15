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
  calorieIntake: {
    dailyAverage: Number,
    mealIrregularity: Boolean,
  },
  heartRate: {
    resting: Number,
  },
  bloodOxygen: {
    averageSpO2: Number,
  },
  dailySteps: Number,
  sleepData: {
    averageDurationHours: Number,
    frequentAwakenings: Boolean,
  },
  eveningBodyTemperature: Number,
  waistCircumference: Number,
  bloodPressure: {
    systolic: Number,
    diastolic: Number,
  },
  bodyWeight: Number,
  bodyMassIndex: Number,
  waterIntake: Number,
  caffeineIntake: {
    cupsOfCoffee: Number,
  },
});

const HealthData =
  mongoose.models.HealthData || mongoose.model("HealthData", healthDataSchema);

export default HealthData;
