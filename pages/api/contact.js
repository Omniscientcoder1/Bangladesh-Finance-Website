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

    // 3. Simple validation
    if (!name || !email || !message) {
      return res.status(400).json({ message: 'Name, email, and message are required.' });
    }

    // 4. Create a new contact document
    const newContact = await Contact.create({
      name,
      email,
      phone,
      service,
      message,
    });

    // 5. Respond with the created document
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
