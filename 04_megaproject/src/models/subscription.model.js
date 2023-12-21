import mongoose, { Schema, model } from "mongoose";

const subscriptionSchema = new Schema({
  subscriber: {
    type: Schema.Types.ObjectId, //the one who is subscribing
    ref: "User"
  },
  channel: {
    type: Schema.Types.ObjectId, //the one to whom subscriber is subscribed
    ref: "User"
  },
  

}, { timestamps: true });

export const Subscription = model("Subscription", subscriptionSchema);