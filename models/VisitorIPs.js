// models/VisitorIPs.js

import mongoose from 'mongoose';

const VisitorIPsSchema = new mongoose.Schema(
  {
    ip: { 
      type: String, 
      unique: true, // ensures we don't store the same IP multiple times
      required: true 
    },
  },
  {
    timestamps: true, // optional, can track when IP was first added
  }
);

export default mongoose.models.VisitorIPs ||
  mongoose.model('VisitorIPs', VisitorIPsSchema);
