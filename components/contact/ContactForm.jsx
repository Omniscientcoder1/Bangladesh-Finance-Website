// const ContactForm = () => {
//   return (
//     <form action="#">
//       <div className="row">
//         <div className="col-6">
//           <div className="single-input">
//             <label htmlFor="name">Name</label>
//             <input
//               type="text"
//               id="name"
//               placeholder="What's your name?"
//               required
//             />
//           </div>
//         </div>
//         <div className="col-6">
//           <div className="single-input">
//             <label htmlFor="email">Email</label>
//             <input
//               type="text"
//               id="email"
//               placeholder="What's your email?"
//               required
//             />
//           </div>
//         </div>
//       </div>
//       <div className="row">
//         <div className="col-6">
//           <div className="single-input">
//             <label htmlFor="phone">Phone</label>
//             <input
//               type="text"
//               id="phone"
//               placeholder="(123) 480 - 3540"
//               required
//             />
//           </div>
//         </div>
//         <div className="col-6">
//           <div className="single-input">
//             <label htmlFor="loan">Service interested in</label>
//             <input
//               type="text"
//               id="loan"
//               placeholder="Ex. Auto Loan, Home Loan"
//               required
//             />
//           </div>
//         </div>
//       </div>
//       <div className="row">
//         <div className="col-12">
//           <div className="single-input">
//             <label htmlFor="message">Message</label>
//             <textarea
//               id="message"
//               placeholder="I would like to get in touch with you..."
//               cols="30"
//               rows="10"
//               required
//             ></textarea>
//           </div>
//         </div>
//       </div>
//       <div className="btn-area text-center">
//         <button type={"button"} className="cmn-btn">
//           Send Message
//         </button>
//       </div>
//     </form>
//   );
// };

// export default ContactForm;

import { useState } from 'react';

const ContactForm = () => {
  // 1. Create local state for form fields
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });

  // 2. Handle input changes
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  // 3. Submit form data to /api/contact
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent page reload

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        // Success handling
        alert('Message sent successfully!');
        // Optionally reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          service: '',
          message: '',
        });
      } else {
        // Error handling
        alert(`Error: ${result.message || 'Something went wrong'}`);
      }
    } catch (error) {
      console.error('Request failed', error);
      alert('An unexpected error occurred. Please try again later.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="row">
        <div className="col-6">
          <div className="single-input">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              placeholder="What's your name?"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="col-6">
          <div className="single-input">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="What's your email?"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-6">
          <div className="single-input">
            <label htmlFor="phone">Phone</label>
            <input
              type="text"
              id="phone"
              placeholder="(123) 480 - 3540"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="col-6">
          <div className="single-input">
            <label htmlFor="service">Service interested in</label>
            <input
              type="text"
              id="service"
              placeholder="Ex. Auto Loan, Home Loan"
              value={formData.service}
              onChange={handleChange}
              required
            />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <div className="single-input">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              placeholder="I would like to get in touch with you..."
              cols="30"
              rows="10"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
        </div>
      </div>
      <div className="btn-area text-center">
        {/* 4. Use a submit button so handleSubmit is triggered */}
        <button type="submit" className="cmn-btn">
          Send Message
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
