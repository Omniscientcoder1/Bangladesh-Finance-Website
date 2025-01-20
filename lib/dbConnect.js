// import mongoose from 'mongoose';

// const MONGODB_URI = process.env.MONGODB_URI;

// /**
//  * Connect to MongoDB using Mongoose.
//  * We only connect once to avoid multi-connection issues in development.
//  */
// async function dbConnect() {
//   if (mongoose.connection.readyState >= 1) {
//     return;
//   }
  
//   return mongoose.connect(MONGODB_URI, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   });
// }

// export default dbConnect;

import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error('Please define the MONGODB_URI environment variable in .env.local');
}

/**
 * Connect to MongoDB using Mongoose.
 * Ensures a single connection is maintained in development and production.
 */
async function dbConnect() {
  if (mongoose.connection.readyState >= 1) {
    return mongoose.connection;
  }

  if (!global.mongoose) {
    global.mongoose = { conn: null, promise: null };
  }

  if (!global.mongoose.promise) {
    global.mongoose.promise = mongoose.connect(MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  }

  global.mongoose.conn = await global.mongoose.promise;
  return global.mongoose.conn;
}

export default dbConnect;

