'use client';

import React, { useState, ChangeEvent, MouseEvent } from 'react';
import { Mail, Phone, MapPin, Send, MessageCircle, Clock, CheckCircle, User, MessageSquare, BookOpen, GraduationCap, Users, Brain, Star, Award, Target } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
  userType: string;
}

interface ContactInfo {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  value: string;
  description: string;
}

const ContactUs: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
    userType: 'student'
  });

  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsLoading(true);
    
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
      setTimeout(() => setIsSubmitted(false), 3000);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
        userType: 'student'
      });
    }, 1000);
  };

  const contactInfo: ContactInfo[] = [
    {
      icon: Mail,
      title: "Primary Email",
      value: "shivanshur62@gmail.com",
      description: "Main support email"
    },
    {
      icon: Mail,
      title: "Alternative Email", 
      value: "nktripathi56789@gmail.com",
      description: "Secondary support"
    },
    {
      icon: Mail,
      title: "Business Email",
      value: "yourgolu.co@gmail.com", 
      description: "Business inquiries"
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+91 876543210",
      description: "Call us anytime"
    },
    {
      icon: MapPin,
      title: "Address",
      value: "Dwarka, New Delhi, India",
      description: "Visit our office"
    }
  ];

  const faqs = [
    {
      question: "How can I access premium AI tools?",
      answer: "Sign up for our platform and choose from our flexible pricing plans to unlock all premium features."
    },
    {
      question: "Do you offer student discounts?",
      answer: "Yes! We provide special discounted rates for students with valid educational credentials."
    },
    {
      question: "Is technical support available 24/7?",
      answer: "Our support team is available during business hours, with emergency support for critical issues."
    },
    {
      question: "Can I collaborate with other students?",
      answer: "Absolutely! Our platform includes collaboration features for group projects and study sessions."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 bg-gradient-radial from-purple-900/20 via-slate-900/40 to-black/60"></div>
      <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-75"></div>
      
      {/* Floating Icons */}
      <div className="absolute top-1/4 left-1/4 animate-bounce">
        <BookOpen className="w-8 h-8 text-purple-400/30" />
      </div>
      <div className="absolute top-1/3 right-1/4 animate-bounce delay-75">
        <GraduationCap className="w-10 h-10 text-blue-400/30" />
      </div>
      <div className="absolute bottom-1/4 left-1/3 animate-bounce delay-150">
        <Users className="w-9 h-9 text-pink-400/30" />
      </div>
      <div className="absolute bottom-1/3 right-1/3 animate-bounce delay-300">
        <Brain className="w-7 h-7 text-green-400/30" />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-16">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-6">
            Get in Touch
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-10">
            Have questions about our AI-powered study platform? We're here to help you succeed in your academic journey!
          </p>
          
          {/* Stats Bar */}
          <div className="flex flex-wrap justify-center gap-6 mt-12">
            <div className="flex items-center gap-3 bg-white/5 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10">
              <Users className="w-5 h-5 text-purple-400" />
              <span className="text-white font-medium">50K+ Students</span>
            </div>
            <div className="flex items-center gap-3 bg-white/5 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10">
              <Brain className="w-5 h-5 text-blue-400" />
              <span className="text-white font-medium">15+ AI Tools</span>
            </div>
            <div className="flex items-center gap-3 bg-white/5 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10">
              <Star className="w-5 h-5 text-yellow-400" />
              <span className="text-white font-medium">99% Satisfaction</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Form */}
          <div className="lg:col-span-2 space-y-8">
            <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-8 shadow-2xl hover:shadow-purple-500/20 transition-all duration-500">
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600">
                  <MessageSquare className="w-7 h-7 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-white">Send us a Message</h2>
              </div>
              
              <div className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="flex items-center gap-2 text-sm font-medium text-gray-300">
                      <User className="w-4 h-4" />
                      Your Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3.5 rounded-xl bg-white/5 border border-white/20 text-white placeholder-gray-400 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 focus:outline-none transition-all duration-300"
                      placeholder="Enter your full name"
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="flex items-center gap-2 text-sm font-medium text-gray-300">
                      <Mail className="w-4 h-4" />
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3.5 rounded-xl bg-white/5 border border-white/20 text-white placeholder-gray-400 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 focus:outline-none transition-all duration-300"
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-300">
                      Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3.5 rounded-xl bg-white/5 border border-white/20 text-white placeholder-gray-400 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 focus:outline-none transition-all duration-300"
                      placeholder="What's this about?"
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-300">
                      I am a
                    </label>
                    <select
                      name="userType"
                      value={formData.userType}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3.5 rounded-xl bg-white/5 border border-white/20 text-white focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 focus:outline-none transition-all duration-300 appearance-none"
                    >
                      <option value="student" className="bg-gray-800">Student</option>
                      <option value="teacher" className="bg-gray-800">Teacher</option>
                      <option value="parent" className="bg-gray-800">Parent</option>
                      <option value="other" className="bg-gray-800">Other</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="flex items-center gap-2 text-sm font-medium text-gray-300">
                    <MessageCircle className="w-4 h-4" />
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={6}
                    className="w-full px-4 py-3.5 rounded-xl bg-white/5 border border-white/20 text-white placeholder-gray-400 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 focus:outline-none transition-all duration-300 resize-none"
                    placeholder="Tell us how we can help you..."
                    required
                  />
                </div>

                <button
                  onClick={handleSubmit}
                  disabled={isLoading || isSubmitted}
                  className={`w-full py-4 px-8 rounded-xl font-semibold text-white transition-all duration-300 flex items-center justify-center gap-3 ${
                    isSubmitted 
                      ? 'bg-green-600 hover:bg-green-700 shadow-lg hover:shadow-green-500/25' 
                      : 'bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 shadow-lg hover:shadow-purple-500/25'
                  } ${isLoading ? 'animate-pulse' : ''}`}
                >
                  {isLoading ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      Sending...
                    </>
                  ) : isSubmitted ? (
                    <>
                      <CheckCircle className="w-5 h-5" />
                      Message Sent Successfully!
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Send Message
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* FAQ Section */}
            <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-8 shadow-2xl hover:shadow-green-500/20 transition-all duration-500">
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 rounded-xl bg-gradient-to-r from-green-600 to-emerald-600">
                  <Clock className="w-7 h-7 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-white">Frequently Asked Questions</h2>
              </div>
              
              <div className="space-y-6">
                {faqs.map((faq, index) => (
                  <div key={index} className="p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                    <h4 className="font-semibold text-purple-400 text-md mb-3 flex items-center gap-2">
                      <Target className="w-4 h-4" />
                      {faq.question}
                    </h4>
                    <p className="text-gray-300 text-sm leading-relaxed pl-6">
                      {faq.answer}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Contact Information */}
            <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-6 shadow-2xl hover:shadow-blue-500/20 transition-all duration-500">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">Contact Information</h3>
              </div>
              
              <div className="space-y-5">
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon;
                  return (
                    <div key={index} className="p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 cursor-pointer group">
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center group-hover:scale-110 transition-transform">
                          <IconComponent className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-white group-hover:text-purple-400 transition-colors">{info.title}</h4>
                          <p className="text-gray-300 text-sm mb-1 group-hover:text-white transition-colors">{info.value}</p>
                          <p className="text-gray-500 text-xs group-hover:text-gray-300 transition-colors">{info.description}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* New Projects */}
            <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-6 shadow-2xl hover:shadow-orange-500/20 transition-all duration-500">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-xl bg-gradient-to-r from-orange-600 to-red-600">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">New Projects</h3>
              </div>
              
              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors group cursor-pointer">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold text-orange-400 group-hover:text-orange-300">AI Study Assistant</h4>
                    <span className="text-xs bg-green-500/20 text-green-400 px-2 py-1 rounded-full">In Progress</span>
                  </div>
                  <p className="text-gray-400 text-xs">Advanced AI-powered study companion</p>
                </div>
                
                <div className="p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors group cursor-pointer">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold text-blue-400 group-hover:text-blue-300">Virtual Labs</h4>
                    <span className="text-xs bg-yellow-500/20 text-yellow-400 px-2 py-1 rounded-full">Planning</span>
                  </div>
                  <p className="text-gray-400 text-xs">Interactive virtual laboratory experiments</p>
                </div>
                
                <div className="p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors group cursor-pointer">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold text-purple-400 group-hover:text-purple-300">Smart Analytics</h4>
                    <span className="text-xs bg-blue-500/20 text-blue-400 px-2 py-1 rounded-full">Coming Soon</span>
                  </div>
                  <p className="text-gray-400 text-xs">Personalized learning analytics dashboard</p>
                </div>
              </div>
            </div>

            {/* Response Time */}
            <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-6 shadow-2xl hover:shadow-purple-500/20 transition-all duration-500">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white">Response Time</h3>
              </div>
              
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-300 text-sm">Email Response</span>
                  <span className="text-purple-400 font-medium text-sm">Within 24 hours</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300 text-sm">Phone Support</span>
                  <span className="text-purple-400 font-medium text-sm">Within 1 hour</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300 text-sm">Emergency Issues</span>
                  <span className="text-purple-400 font-medium text-sm">Immediate</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
