import React, { useState } from 'react';
import AOS from 'aos'; // Importer AOS pour les animations
import 'aos/dist/aos.css'; // Importer les styles AOS

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data submitted:', formData);
    setSubmitted(true);
    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

  return (
    <div className="contact-page bg-slate-50 rounded-2xl bg-opacity-90 container mx-auto p-6 max-w-xl mt-5" data-aos="fade-up" data-aos-duration="1000">
      <h2 className="text-3xl font-bold mb-6 text-center">Contact Me</h2>
      {submitted ? (
        <p className="text-green-600 text-center" aria-live="polite">
          Thank you for your message! I'll get back to you soon.
        </p>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="form-group">
            <label htmlFor="name" className="block mb-2 font-semibold text-gray-700">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="block w-full px-5 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-indigo-300"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email" className="block mb-2 font-semibold text-gray-700">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="block w-full px-5 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-indigo-300"
            />
          </div>
          <div className="form-group">
            <label htmlFor="message" className="block mb-2 font-semibold text-gray-700">Message:</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              className="block w-full px-5 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-indigo-300"
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg shadow-md transition-all duration-300 ease-in-out transform hover:scale-y-105"
          >
            Submit
          </button>
        </form>
      )}
    </div>
  );
};

export default ContactPage;
