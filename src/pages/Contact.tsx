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
    <div className="py-12 bg-black">
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
                  className="w-full px-4 py-2 bg-gray-900 border border-gray-700 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent text-white"
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
                  className="w-full px-4 py-2 bg-gray-900 border border-gray-700 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent text-white"
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
                  className="w-full px-4 py-2 bg-gray-900 border border-gray-700 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent text-white"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gray-800 text-white py-3 rounded-lg hover:bg-gray-700 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div>
            <div className="bg-gray-900 p-8 rounded-lg">
              <h3 className="text-2xl font-semibold mb-6 text-white">Get in Touch</h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Phone className="text-gray-400" />
                  <div>
                    <h4 className="font-medium text-white">Phone</h4>
                    <p className="text-gray-400">0980101989 / 7620870603 / 9011719000</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Mail className="text-gray-400" />
                  <div>
                    <h4 className="font-medium text-white">Email</h4>
                    <p className="text-gray-400">Sadgurutiles@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <MapPin className="text-gray-400" />
                  <div>
                    <h4 className="font-medium text-white">Address</h4>
                    <p className="text-gray-400">
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