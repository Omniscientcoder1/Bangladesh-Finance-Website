import dbConnect from '../../lib/dbConnect';
import VisitorCount from '../../models/VisitorCount';
import VisitorIPs from '../../models/VisitorIPs';

export default async function handler(req, res) {
  await dbConnect();

  // We’ll handle GET requests for simplicity
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    // 1. Get the request IP. 
    // In Next.js (depending on hosting), you can often grab from the request headers or connection info.
    // For Vercel, you might check x-forwarded-for or similar.
    const forwarded = req.headers['x-forwarded-for'];
    const ip = forwarded ? forwarded.split(',')[0] : req.socket.remoteAddress;

    // 2. Ensure we have a single VisitorCount doc (create if not found)
    let [visitorDoc] = await VisitorCount.find({});
    if (!visitorDoc) {
      visitorDoc = await VisitorCount.create({ count: 0 });
    }

    // 3. Check if this IP is already in VisitorIPs
    const ipExists = await VisitorIPs.findOne({ ip });

    if (!ipExists) {
      // 3a. If IP not found => increment unique visitor count
      visitorDoc.count += 1;
      await visitorDoc.save();

      // 3b. Store the new IP
      await VisitorIPs.create({ ip });
    }

    // 4. Return the current visitor count
    return res.status(200).json({ 
      count: visitorDoc.count, 
      newVisit: !ipExists ? true : false 
    });
  } catch (error) {
    console.error('Error in /api/visitor:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}
