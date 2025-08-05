import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Users, Briefcase, GraduationCap, Upload, X, CheckCircle } from 'lucide-react';
import Navbar from '../Components/Navbar';

const JoinOurTeam = () => {
  const [selectedOption, setSelectedOption] = useState('');
  const [formData, setFormData] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setFormData({});
    setIsSubmitted(false);
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleFileUpload = (field, file) => {
    setFormData(prev => ({
      ...prev,
      [field]: file
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
  };

  const resetForm = () => {
    setSelectedOption('');
    setFormData({});
    setIsSubmitted(false);
  };

  // Form options configuration
  const formOptions = [
    {
      id: 'freelancer',
      title: 'Freelancer',
      icon: Users,
      description: 'Join us as a freelance professional for event projects',
      color: 'bg-blue-500'
    },
    {
      id: 'internship',
      title: 'Internship',
      icon: GraduationCap,
      description: 'Start your career with our internship program',
      color: 'bg-green-500'
    },
    {
      id: 'permanent',
      title: 'Permanent Role',
      icon: Briefcase,
      description: 'Build your career with a full-time position',
      color: 'bg-purple-500'
    }
  ];

  const roleOptions = ['RSVP', 'Check-ins', 'Logistics', 'Control Room', 'Other'];
  const departmentOptions = ['Project Manager', 'Client Servicing', 'RSVP', 'Operations', 'Creative', 'Other'];

  return (
    <>
      {/* Navbar */}
      <Navbar />
      
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-8">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">Join Our Team</h1>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
            At <span className="font-semibold text-blue-600">Trikaya</span>, we are always looking for passionate, creative and driven individuals to help us craft unforgettable wedding experiences. Whether you are starting your journey or a seasoned professional, we offer a place for you to thrive!
          </p>
        </motion.div>

        {/* Success Message */}
        <AnimatePresence>
          {isSubmitted && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -10 }}
              className="bg-gradient-to-r from-green-50 to-emerald-50 border-l-4 border-green-500 text-green-800 px-6 py-4 rounded-xl mb-6 flex items-center shadow-lg"
            >
              <CheckCircle className="mr-3 text-green-600" size={28} />
              <div className="flex-1">
                <h3 className="font-bold text-lg">Thank you for contacting us! 🎉</h3>
                <p className="text-green-700">We'll get back to you shortly.</p>
              </div>
              <button
                onClick={resetForm}
                className="ml-4 text-green-600 hover:text-green-800 hover:bg-green-100 p-2 rounded-full transition-all duration-200"
              >
                <X size={20} />
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Option Selection */}
        {!selectedOption && !isSubmitted && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="grid md:grid-cols-3 gap-6 mb-8"
          >
            {formOptions.map((option) => {
              const IconComponent = option.icon;
              return (
                <motion.button
                  key={option.id}
                  onClick={() => handleOptionSelect(option.id)}
                  className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl p-6 text-center transition-all duration-300 border border-gray-100 hover:border-gray-200 transform hover:-translate-y-1"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className={`${option.color} w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="text-white" size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{option.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{option.description}</p>
                  <div className="mt-4 text-sm font-medium text-blue-600 group-hover:text-blue-700">
                    Get Started →
                  </div>
                </motion.button>
              );
            })}
          </motion.div>
        )}

        {/* Dynamic Forms */}
        <AnimatePresence>
          {selectedOption && !isSubmitted && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100"
            >
              {/* Form Header */}
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-100">
                <div className="flex items-center space-x-3">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                    selectedOption === 'freelancer' ? 'bg-blue-100 text-blue-600' :
                    selectedOption === 'internship' ? 'bg-green-100 text-green-600' :
                    'bg-purple-100 text-purple-600'
                  }`}>
                    {selectedOption === 'freelancer' && <Users size={20} />}
                    {selectedOption === 'internship' && <GraduationCap size={20} />}
                    {selectedOption === 'permanent' && <Briefcase size={20} />}
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">
                    {formOptions.find(opt => opt.id === selectedOption)?.title} Application
                  </h2>
                </div>
                <button
                  onClick={() => setSelectedOption('')}
                  className="text-gray-400 hover:text-gray-600 hover:bg-gray-100 p-2 rounded-full transition-all duration-200"
                >
                  <X size={22} />
                </button>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                
                {/* Freelancer Form */}
                {selectedOption === 'freelancer' && (
                  <>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name *</label>
                        <input
                          type="text"
                          required
                          className="w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white"
                          onChange={(e) => handleInputChange('fullName', e.target.value)}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Age *</label>
                        <input
                          type="number"
                          required
                          min="18"
                          max="65"
                          className="w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white"
                          onChange={(e) => handleInputChange('age', e.target.value)}
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">City *</label>
                        <input
                          type="text"
                          required
                          className="w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white"
                          onChange={(e) => handleInputChange('city', e.target.value)}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Contact Number *</label>
                        <input
                          type="tel"
                          required
                          className="w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white"
                          onChange={(e) => handleInputChange('contact', e.target.value)}
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Email *</label>
                        <input
                          type="email"
                          required
                          className="w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white"
                          onChange={(e) => handleInputChange('email', e.target.value)}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Height</label>
                        <input
                          type="text"
                          placeholder="e.g., 5'6''"
                          className="w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white"
                          onChange={(e) => handleInputChange('height', e.target.value)}
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Prior Experience</label>
                      <textarea
                        rows="2"
                        placeholder="Describe your previous experience in events or related fields"
                        className="w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white resize-none"
                        onChange={(e) => handleInputChange('experience', e.target.value)}
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Companies Worked With</label>
                      <textarea
                        rows="2"
                        placeholder="List companies you've worked with (if any)"
                        className="w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white resize-none"
                        onChange={(e) => handleInputChange('companies', e.target.value)}
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-3">Roles You're Open To *</label>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                        {roleOptions.map((role) => (
                          <label key={role} className="flex items-center bg-gray-50 p-3 rounded-xl hover:bg-blue-50 transition-colors duration-200 cursor-pointer">
                            <input
                              type="checkbox"
                              className="mr-3 w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
                              onChange={(e) => {
                                const currentRoles = formData.roles || [];
                                if (e.target.checked) {
                                  handleInputChange('roles', [...currentRoles, role]);
                                } else {
                                  handleInputChange('roles', currentRoles.filter(r => r !== role));
                                }
                              }}
                            />
                            <span className="text-sm font-medium text-gray-700">{role}</span>
                          </label>
                        ))}
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-3">Formal Photo *</label>
                        <div className="border-2 border-dashed border-blue-200 rounded-xl p-4 text-center bg-blue-50 hover:bg-blue-100 transition-colors duration-200">
                          <Upload className="mx-auto mb-2 text-blue-500" size={20} />
                          <input
                            type="file"
                            accept="image/*"
                            required
                            className="hidden"
                            id="photo-upload"
                            onChange={(e) => handleFileUpload('photo', e.target.files[0])}
                          />
                          <label htmlFor="photo-upload" className="cursor-pointer text-blue-600 hover:text-blue-700 font-medium text-sm">
                            Upload Photo
                          </label>
                          <p className="text-xs text-gray-500 mt-1">JPG, PNG up to 5MB</p>
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-3">Introduction Video (1-2 mins) *</label>
                        <div className="border-2 border-dashed border-blue-200 rounded-xl p-4 text-center bg-blue-50 hover:bg-blue-100 transition-colors duration-200">
                          <Upload className="mx-auto mb-2 text-blue-500" size={20} />
                          <input
                            type="file"
                            accept="video/*"
                            required
                            className="hidden"
                            id="video-upload"
                            onChange={(e) => handleFileUpload('video', e.target.files[0])}
                          />
                          <label htmlFor="video-upload" className="cursor-pointer text-blue-600 hover:text-blue-700 font-medium text-sm">
                            Upload Video
                          </label>
                          <p className="text-xs text-gray-500 mt-1">MP4, MOV up to 50MB</p>
                        </div>
                      </div>
                    </div>
                  </>
                )}

                {/* Internship Form */}
                {selectedOption === 'internship' && (
                  <>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name *</label>
                        <input
                          type="text"
                          required
                          className="w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white"
                          onChange={(e) => handleInputChange('fullName', e.target.value)}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Age *</label>
                        <input
                          type="number"
                          required
                          min="18"
                          max="30"
                          className="w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white"
                          onChange={(e) => handleInputChange('age', e.target.value)}
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Education *</label>
                      <input
                        type="text"
                        required
                        placeholder="Current degree/course and institution"
                        className="w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white"
                        onChange={(e) => handleInputChange('education', e.target.value)}
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Contact Number *</label>
                        <input
                          type="tel"
                          required
                          className="w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white"
                          onChange={(e) => handleInputChange('contact', e.target.value)}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Current City *</label>
                        <input
                          type="text"
                          required
                          className="w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white"
                          onChange={(e) => handleInputChange('city', e.target.value)}
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Reason for Applying *</label>
                      <textarea
                        rows="3"
                        required
                        placeholder="Why do you want to intern with us?"
                        className="w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white resize-none"
                        onChange={(e) => handleInputChange('reason', e.target.value)}
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Past Experience</label>
                      <textarea
                        rows="2"
                        placeholder="Any previous work experience, internships, or relevant projects"
                        className="w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white resize-none"
                        onChange={(e) => handleInputChange('experience', e.target.value)}
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-3">Roles You're Open To *</label>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                        {roleOptions.map((role) => (
                          <label key={role} className="flex items-center bg-gray-50 p-3 rounded-xl hover:bg-green-50 transition-colors duration-200 cursor-pointer">
                            <input
                              type="checkbox"
                              className="mr-3 w-4 h-4 text-green-600 rounded focus:ring-green-500"
                              onChange={(e) => {
                                const currentRoles = formData.roles || [];
                                if (e.target.checked) {
                                  handleInputChange('roles', [...currentRoles, role]);
                                } else {
                                  handleInputChange('roles', currentRoles.filter(r => r !== role));
                                }
                              }}
                            />
                            <span className="text-sm font-medium text-gray-700">{role}</span>
                          </label>
                        ))}
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-3">Formal Photo *</label>
                        <div className="border-2 border-dashed border-green-200 rounded-xl p-4 text-center bg-green-50 hover:bg-green-100 transition-colors duration-200">
                          <Upload className="mx-auto mb-2 text-green-500" size={20} />
                          <input
                            type="file"
                            accept="image/*"
                            required
                            className="hidden"
                            id="intern-photo-upload"
                            onChange={(e) => handleFileUpload('photo', e.target.files[0])}
                          />
                          <label htmlFor="intern-photo-upload" className="cursor-pointer text-green-600 hover:text-green-700 font-medium text-sm">
                            Upload Photo
                          </label>
                          <p className="text-xs text-gray-500 mt-1">JPG, PNG up to 5MB</p>
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-3">Introduction Video *</label>
                        <div className="border-2 border-dashed border-green-200 rounded-xl p-4 text-center bg-green-50 hover:bg-green-100 transition-colors duration-200">
                          <Upload className="mx-auto mb-2 text-green-500" size={20} />
                          <input
                            type="file"
                            accept="video/*"
                            required
                            className="hidden"
                            id="intern-video-upload"
                            onChange={(e) => handleFileUpload('video', e.target.files[0])}
                          />
                          <label htmlFor="intern-video-upload" className="cursor-pointer text-green-600 hover:text-green-700 font-medium text-sm">
                            Upload Video
                          </label>
                          <p className="text-xs text-gray-500 mt-1">MP4, MOV up to 50MB</p>
                        </div>
                      </div>
                    </div>
                  </>
                )}

                {/* Permanent Role Form */}
                {selectedOption === 'permanent' && (
                  <>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                        <input
                          type="text"
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                          onChange={(e) => handleInputChange('fullName', e.target.value)}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Age *</label>
                        <input
                          type="number"
                          required
                          min="18"
                          max="65"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                          onChange={(e) => handleInputChange('age', e.target.value)}
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Current City *</label>
                        <input
                          type="text"
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                          onChange={(e) => handleInputChange('city', e.target.value)}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Contact Number *</label>
                        <input
                          type="tel"
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                          onChange={(e) => handleInputChange('contact', e.target.value)}
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Address *</label>
                      <textarea
                        rows="2"
                        required
                        placeholder="Complete address"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        onChange={(e) => handleInputChange('address', e.target.value)}
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                      <input
                        type="email"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        onChange={(e) => handleInputChange('email', e.target.value)}
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Educational Qualifications *</label>
                      <textarea
                        rows="3"
                        required
                        placeholder="Degree, institution, year of graduation, etc."
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        onChange={(e) => handleInputChange('education', e.target.value)}
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Previous Job Experience *</label>
                      <textarea
                        rows="4"
                        required
                        placeholder="Company name, roles handled, duration, key responsibilities"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        onChange={(e) => handleInputChange('experience', e.target.value)}
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Department Applying For *</label>
                      <select
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        onChange={(e) => handleInputChange('department', e.target.value)}
                      >
                        <option value="">Select Department</option>
                        {departmentOptions.map((dept) => (
                          <option key={dept} value={dept}>{dept}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Why Should We Hire You? *</label>
                      <textarea
                        rows="4"
                        required
                        placeholder="Brief explanation of your unique value proposition"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        onChange={(e) => handleInputChange('whyHire', e.target.value)}
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Resume *</label>
                        <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                          <Upload className="mx-auto mb-2 text-gray-400" size={24} />
                          <input
                            type="file"
                            accept=".pdf,.doc,.docx"
                            required
                            className="hidden"
                            id="resume-upload"
                            onChange={(e) => handleFileUpload('resume', e.target.files[0])}
                          />
                          <label htmlFor="resume-upload" className="cursor-pointer text-purple-600 hover:text-purple-700">
                            Upload Resume
                          </label>
                          <p className="text-xs text-gray-500 mt-1">PDF, DOC, DOCX</p>
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Formal Photograph *</label>
                        <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                          <Upload className="mx-auto mb-2 text-gray-400" size={24} />
                          <input
                            type="file"
                            accept="image/*"
                            required
                            className="hidden"
                            id="perm-photo-upload"
                            onChange={(e) => handleFileUpload('photo', e.target.files[0])}
                          />
                          <label htmlFor="perm-photo-upload" className="cursor-pointer text-purple-600 hover:text-purple-700">
                            Upload Photo
                          </label>
                        </div>
                      </div>
                    </div>
                  </>
                )}

                {/* Submit Button */}
                <div className="pt-4 border-t border-gray-100">
                  <button
                    type="submit"
                    className={`w-full py-3 px-6 rounded-xl text-white font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl ${
                      selectedOption === 'freelancer' ? 'bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800' :
                      selectedOption === 'internship' ? 'bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800' :
                      'bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800'
                    }`}
                  >
                    Submit Application ✨
                  </button>
                  <p className="text-center text-xs text-gray-500 mt-3">
                    By submitting, you agree to our terms and conditions
                  </p>
                </div>
              </form>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
    </>
  );
};

export default JoinOurTeam;
