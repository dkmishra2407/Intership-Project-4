import React, { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleApplyClick = (e) => {
    e.preventDefault();
    const mailtoLink = `mailto:Sadgurutiles@gmail.com?subject=${encodeURIComponent(
      'Application from ' + name
    )}&body=${encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
    )}`;
    window.location.href = mailtoLink;
  };

  return (
    <div className="py-12 bg-neutral-950 min-h-screen">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8 text-white">Contact Us</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <form className="space-y-6" onSubmit={handleApplyClick}>
              <div>
                <label className="block text-sm font-medium text-gray-200 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-2 bg-neutral-800 border border-neutral-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white transition-colors"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-200 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2 bg-neutral-800 border border-neutral-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white transition-colors"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-200 mb-2">
                  Message
                </label>
                <textarea
                  rows={6}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-4 py-2 bg-neutral-800 border border-neutral-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white transition-colors"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div>
            <div className="bg-neutral-800 p-8 rounded-lg border border-neutral-700 shadow-xl">
              <h3 className="text-2xl font-semibold mb-6 text-white">Get in Touch</h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Phone className="text-blue-400" />
                  <div>
                    <h4 className="font-medium text-white">Phone</h4>
                    <p className="text-gray-300">0980101989 / 7620870603 / 9011719000</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Mail className="text-blue-400" />
                  <div>
                    <h4 className="font-medium text-white">Email</h4>
                    <p className="text-gray-300">Sadgurutiles@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <MapPin className="text-blue-400" />
                  <div>
                    <h4 className="font-medium text-white">Address</h4>
                    <p className="text-gray-300">
                      Sr. No. 1/3<br />
                      Yojana Nagar,<br />
                      near HP Petrol Pump,<br />
                      Wagholi-Lohagaon Road,<br />
                      (Lohagaon) Pune-411047
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;