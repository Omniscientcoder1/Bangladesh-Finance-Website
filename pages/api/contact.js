import dbConnect from '../../lib/dbConnect';
import Contact from '../../models/Contact';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  try {
    // 1. Connect to MongoDB
    await dbConnect();

    // 2. Extract form data from the request body
    const { name, email, phone, service, message } = req.body;

    // 3. Get client IP address
    //   - The 'x-forwarded-for' header is often set by reverse proxies (e.g. Vercel, Heroku)
    //   - Fallback to req.socket.remoteAddress if x-forwarded-for is missing
    const forwarded = req.headers['x-forwarded-for'];
    const ipAddress = forwarded ? forwarded.split(',')[0] : req.socket.remoteAddress;

    // 4. Validate minimal fields
    if (!name || !email || !message) {
      return res.status(400).json({ message: 'Name, email, and message are required.' });
    }

    // 5. Create a new contact document with the IP address
    const newContact = await Contact.create({
      name,
      email,
      phone,
      service,
      message,
      ipAddress, // <--- store the user's IP here
    });

    // 6. Respond with success
    return res.status(201).json({
      success: true,
      data: newContact,
      message: 'Contact form submitted successfully.',
    });
  } catch (error) {
    console.error('API Error:', error);
    return res.status(500).json({
      success: false,
      error: 'Server error. Please try again later.'
    });
  }
}
