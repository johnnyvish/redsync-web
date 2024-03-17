import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
  email: {
    type: String,
  },
  password: { type: String },
  stripeSubscriptionId: {
    type: String,
    default: "",
  },
  stripeCustomerId: {
    type: String,
    default: "",
  },
  stripeCurrentPeriodEnd: {
    type: Date,
    default: null,
  },
});

const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;
