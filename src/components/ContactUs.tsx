import React, { useState } from 'react';
import { Mail, MapPin, Send } from 'lucide-react';

export const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus('Sending...');

    try {
      const response = await fetch('/.netlify/functions/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        setStatus('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus(data.message || 'Something went wrong.');
        console.error(data.error);
      }
    } catch (error) {
      setStatus('Server error. Please try again.');
      console.error(error);
    }

    setLoading(false);
  };

  return (
    <section id="contact-us" className="py-24 bg-slate-50 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16">

          <div>
            <h2 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6">
              Get in Touch
            </h2>
            <p className="text-lg text-slate-600 mb-10">
              Have questions about membership, events, or the Brain Bee? We'd love to hear from you.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100">
            <form onSubmit={handleSubmit} className="space-y-6">

              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your Name"
                className="w-full px-4 py-3 border rounded-lg"
              />

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Your Email"
                className="w-full px-4 py-3 border rounded-lg"
              />

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Your Message"
                className="w-full px-4 py-3 border rounded-lg min-h-[120px]"
              />

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-[#991b1b] text-white py-4 rounded-lg flex justify-center items-center"
              >
                <Send size={18} className="mr-2" />
                {loading ? "Sending..." : "Send Message"}
              </button>

              {status && (
                <p className="text-sm text-center mt-4 text-slate-600">
                  {status}
                </p>
              )}

            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
