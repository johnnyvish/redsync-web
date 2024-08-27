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
});

const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;
