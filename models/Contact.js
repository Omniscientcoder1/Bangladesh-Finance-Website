import mongoose from 'mongoose';

const ContactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
  },
  service: {
    type: String,
  },
  message: {
    type: String,
    required: true,
  },
  ipAddress: {
    type: String,
    required: false, // or true if you want to force it
  },
}, {
  timestamps: true
});

export default mongoose.models.Contact || mongoose.model('Contact', ContactSchema);
