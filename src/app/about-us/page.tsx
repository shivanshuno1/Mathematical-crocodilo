'use client';

import React from 'react';
import { Brain, Users, Zap, Target, Award, Lightbulb, BookOpen, Rocket, Heart, Star, TrendingUp, Shield } from 'lucide-react';

const AboutUs: React.FC = () => {
  const teamMembers = [
    {
      name: "Nitin",
      role: "Co-Founder",
      email: "nktripathi56789@gmail.com",
      description: "Passionate about revolutionizing education through innovative AI technology solutions.",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      name: "Shivanshu",
      role: "Co-Founder", 
      email: "shivanshur62@gmail.com",
      description: "Tech enthusiast dedicated to building the future of AI-powered learning platforms.",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      name: "Satish",
      role: "Co-Founder",
      email: "yourgolu.co@gmail.com", 
      description: "Strategic visionary focused on expanding educational impact and platform growth.",
      gradient: "from-green-500 to-emerald-500"
    }
  ];

  const features = [
    {
      icon: Brain,
      title: "AI-Powered Learning",
      description: "Advanced artificial intelligence that adapts to your learning style and pace.",
      color: "purple"
    },
    {
      icon: BookOpen,
      title: "Comprehensive Tools",
      description: "15+ specialized AI tools covering all aspects of academic success.",
      color: "blue"
    },
    {
      icon: Users,
      title: "Collaborative Platform",
      description: "Connect and study with peers through our integrated collaboration features.",
      color: "green"
    },
    {
      icon: Zap,
      title: "Instant Results",
      description: "Get immediate feedback and solutions to accelerate your learning journey.",
      color: "yellow"
    },
    {
      icon: Target,
      title: "Goal-Oriented",
      description: "Set and track academic goals with personalized learning pathways.",
      color: "red"
    },
    {
      icon: Shield,
      title: "Secure & Reliable",
      description: "Your data is protected with enterprise-grade security measures.",
      color: "indigo"
    }
  ];

  const stats = [
    { number: "25+", label: "Early Users", icon: Users, color: "purple" },
    { number: "95%", label: "User Satisfaction", icon: Star, color: "yellow" },
    { number: "24/7", label: "Support Available", icon: Heart, color: "red" },
    { number: "Delhi", label: "Based in India", icon: Target, color: "blue" }
  ];

  const milestones = [
    {
      year: "2025",
      title: "Project Started",
      description: "Began developing our AI-powered study platform with initial concept and research.",
      icon: Lightbulb
    },
    {
      year: "2025",
      title: "Early Development",
      description: "Started building core features and gathering initial user feedback from students.",
      icon: Users
    },
    {
      year: "2025",
      title: "AI Tools Integration",
      description: "Integrated AI tools for student productivity and enhanced learning experience.",
      icon: Brain
    },
    {
      year: "2025",
      title: "Platform Ready",
      description: "Preparing for official launch with enhanced features and user experience.",
      icon: Rocket
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-slate-900/40 to-black/60"></div>
      <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-2000"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-green-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-6 animate-pulse">
            About Our Mission
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Revolutionizing education through cutting-edge AI technology, making learning more accessible, engaging, and effective for students worldwide.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-8 shadow-2xl hover:shadow-purple-500/20 transition-all duration-500 hover:scale-[1.02]">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
                <Lightbulb className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-white">Our Vision</h2>
            </div>
            <p className="text-gray-300 text-lg leading-relaxed">
              To create a world where every student has access to personalized, AI-powered learning tools that adapt to their unique learning style. We envision a future where technology breaks down barriers to quality education.
            </p>
          </div>

          <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-8 shadow-2xl hover:shadow-blue-500/20 transition-all duration-500 hover:scale-[1.02]">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center">
                <Target className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-white">Our Mission</h2>
            </div>
            <p className="text-gray-300 text-lg leading-relaxed">
              To democratize access to premium educational tools by centralizing the best AI-powered study resources in one intuitive platform. Making advanced learning technology affordable and accessible to all students.
            </p>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-4xl font-bold text-center bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-12">
            Platform Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div key={index} className="group backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-6 shadow-2xl hover:shadow-purple-500/20 transition-all duration-500 hover:scale-105">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-purple-500 to-blue-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <IconComponent className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-4xl font-bold text-center bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent mb-12">
            Platform Statistics
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="group backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-8 shadow-2xl hover:shadow-blue-500/20 transition-all duration-500 hover:scale-110 text-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-purple-500 to-blue-600 flex items-center justify-center mx-auto mb-4 group-hover:animate-bounce">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-300 font-medium">
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-4xl font-bold text-center bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent mb-12">
            Our Journey
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {milestones.map((milestone, index) => {
              const IconComponent = milestone.icon;
              return (
                <div key={index} className="group backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-6 shadow-2xl hover:shadow-green-500/20 transition-all duration-500 hover:scale-105">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center mb-4 group-hover:rotate-12 transition-transform">
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-green-400 mb-2">{milestone.year}</div>
                  <h3 className="text-lg font-bold text-white mb-3 group-hover:text-green-400 transition-colors">
                    {milestone.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {milestone.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-4xl font-bold text-center bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent mb-12">
            Meet Our Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="group backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-8 shadow-2xl hover:shadow-yellow-500/20 transition-all duration-500 hover:scale-105 text-center">
                <div className={`w-24 h-24 rounded-full bg-gradient-to-r ${member.gradient} mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform`}>
                  <Users className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-yellow-400 transition-colors">
                  {member.name}
                </h3>
                <div className={`text-lg bg-gradient-to-r ${member.gradient} bg-clip-text text-transparent font-semibold mb-3`}>
                  {member.role}
                </div>
                <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                  {member.description}
                </p>
                <a href={`mailto:${member.email}`} className="text-blue-400 hover:text-blue-300 text-sm transition-colors">
                  {member.email}
                </a>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-12 shadow-2xl hover:shadow-purple-500/20 transition-all duration-500">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-6">
              Join Our Educational Revolution
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Ready to transform your learning experience? Join thousands of students who are already using our AI-powered platform to achieve academic excellence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105">
                Get Started Today
              </button>
              <button className="px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
