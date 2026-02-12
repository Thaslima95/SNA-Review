import React, { useState } from 'react';
import { Mail, MapPin, Send } from 'lucide-react';

export const ContactUs = () => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');

    try {
      const response = await fetch('/.netlify/functions/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('Something went wrong. Please try again.');
      }
    } catch (error) {
      setStatus('Server error. Please try again.');
    }
  };

  return (
    <section id="contact-us" className="py-24 bg-slate-50 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16">

          {/* LEFT CONTENT (same as yours) */}
          <div>
            <h2 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6">
              Get in Touch
            </h2>
            <p className="text-lg text-slate-600 mb-10">
              Have questions about membership, events, or the Brain Bee? We'd love to hear from you.
            </p>

            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="bg-white p-3 rounded-lg shadow-sm text-[#991b1b]">
                  <Mail />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Email Us</h4>
                  <p className="text-slate-600">secretariat@neuroscience.sg</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-white p-3 rounded-lg shadow-sm text-[#991b1b]">
                  <MapPin />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Office</h4>
                  <p className="text-slate-600">
                    28 Medical Dr, #04-01<br />
                    Centre for Life Sciences<br />
                    Singapore 117456
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* UPDATED FORM */}
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100">
            <form onSubmit={handleSubmit} className="space-y-6">

              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-[#991b1b] focus:ring-1 focus:ring-[#991b1b] outline-none"
                  placeholder="Dr. Jane Doe"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-[#991b1b] focus:ring-1 focus:ring-[#991b1b] outline-none"
                  placeholder="jane@university.edu.sg"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-[#991b1b] focus:ring-1 focus:ring-[#991b1b] outline-none min-h-[120px]"
                  placeholder="How can we help you?"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#991b1b] text-white font-bold py-4 rounded-lg hover:bg-[#7f1d1d] transition-colors flex justify-center items-center"
              >
                <Send size={18} className="mr-2" />
                Send Message
              </button>

              {/* STATUS MESSAGE */}
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
