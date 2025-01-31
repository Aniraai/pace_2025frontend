import React, { useState } from 'react';
import { User, Mail, Phone, School, Calendar } from 'lucide-react';

function App() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    whatsappNumber: '',
    institute: '',
    teamCaptainName: '',
    teamCaptainNumber: '',
    teamCaptainEmail: '',
    teamManagerName: '',
    teamManagerNumber: '',
    sportsCoordinatorName: '',
    sportsCoordinatorNumber: '',
    sportsCoordinatorEmail: '',
    events: '',
    selectEvents: '',
    accommodation: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-8 space-y-6">
          <h2 className="text-2xl font-semibold text-gray-800 text-center">Pace2K25 Registration Form</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            {Object.keys(formData).map((field, index) => (
              <div key={index} className="relative space-y-2">
                <label className="block text-gray-700 font-medium capitalize">{field.replace(/([A-Z])/g, ' $1')}</label>
                <input
                  type="text"
                  name={field}
                  value={formData[field]}
                  onChange={handleChange}
                  placeholder={field.replace(/([A-Z])/g, ' $1')}
                  className="block w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  required
                />
              </div>
            ))}
            <button type="submit" className="w-full bg-indigo-600 text-white py-3 px-6 rounded-lg hover:bg-indigo-700 transition duration-200 font-semibold text-lg">
              Pay Now
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
