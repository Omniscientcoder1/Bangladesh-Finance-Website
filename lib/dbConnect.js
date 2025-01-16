import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI;

/**
 * Connect to MongoDB using Mongoose.
 * We only connect once to avoid multi-connection issues in development.
 */
async function dbConnect() {
  if (mongoose.connection.readyState >= 1) {
    return;
  }
  
  return mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
}

export default dbConnect;
