// models/Visit.js
import mongoose from 'mongoose';

const VisitSchema = new mongoose.Schema({
  ip: { type: String, required: true },
  visitedAt: { type: Date, default: Date.now },
});

export default mongoose.models.Visit || mongoose.model('Visit', VisitSchema);
