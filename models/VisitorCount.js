// models/VisitorCount.js

import mongoose from 'mongoose';

const VisitorCountSchema = new mongoose.Schema({
  count: {
    type: Number,
    default: 0,
  },
});

export default mongoose.models.VisitorCount ||
  mongoose.model('VisitorCount', VisitorCountSchema);
