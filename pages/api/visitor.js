import dbConnect from '../../lib/dbConnect';
import mongoose from 'mongoose';

const visitorSchema = new mongoose.Schema({
  visitorId: { type: String, unique: true },
  createdAt: { type: Date, default: Date.now },
});

const Visitor = mongoose.models.Visitor || mongoose.model('Visitor', visitorSchema);

export default async function handler(req, res) {
  await dbConnect();

  if (req.method === 'POST') {
    const { visitorId } = req.body;

    if (!visitorId) {
      return res.status(400).json({ message: 'Visitor ID is required' });
    }

    // Check if visitor already exists
    const existingVisitor = await Visitor.findOne({ visitorId });
    if (!existingVisitor) {
      await new Visitor({ visitorId }).save();
    }

    // Count total unique visitors
    const count = await Visitor.countDocuments();
    return res.status(200).json({ count });
  }

  res.status(405).json({ message: 'Method not allowed' });
}
