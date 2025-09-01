"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, ArrowLeft, Shield, Send } from "lucide-react";
import Link from "next/link";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setMessage(null);
    
    if (!email) {
      setError("❌ Please enter your email address");
      return;
    }
    
    if (!/\S+@\S+\.\S+/.test(email)) {
      setError("❌ Please enter a valid email address");
      return;
    }

    setLoading(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Success message
      setMessage("✅ Password reset instructions have been sent to your email");
      setEmail("");
    } catch (error) {
      setError("❌ Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // Floating particles component
  const FloatingParticles = () => {
    return (
      <>
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-gradient-to-r from-blue-400/20 to-purple-500/20"
            style={{
              width: Math.floor(Math.random() * 15) + 5 + 'px',
              height: Math.floor(Math.random() * 15) + 5 + 'px',
              top: Math.floor(Math.random() * 100) + '%',
              left: Math.floor(Math.random() * 100) + '%',
            }}
            animate={{
              y: [0, -20, 0],
              x: [0, Math.random() * 20 - 10, 0],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </>
    );
  };

  return (
    <div className="relative flex items-center justify-center min-h-screen overflow-hidden bg-black">
      {/* Animated Background Gradient */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-blue-900/10 via-black to-purple-900/10"
        animate={{
          backgroundPosition: ['0% 0%', '100% 100%'],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          repeatType: 'reverse',
          ease: "linear",
        }}
      />
      
      {/* Floating Orbs with enhanced animation */}
      <motion.div 
        className="absolute -top-32 -left-32 w-96 h-96 bg-blue-600/30 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.4, 0.7, 0.4],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <motion.div 
        className="absolute -bottom-32 -right-32 w-96 h-96 bg-purple-600/30 rounded-full blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.7, 0.4, 0.7],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />
      
      {/* Additional floating elements */}
      <div className="absolute top-1/4 left-1/4 w-40 h-40 bg-pink-500/10 rounded-full blur-2xl animate-pulse delay-700"></div>
      <div className="absolute bottom-1/3 right-1/3 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl animate-pulse delay-300"></div>
      
      {/* Floating particles */}
      <FloatingParticles />

      {/* Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="relative z-10 w-[90%] max-w-md p-8 rounded-2xl border border-white/20 shadow-2xl 
                   bg-gradient-to-br from-gray-900/90 via-black/80 to-gray-900/90 backdrop-blur-xl
                   shadow-blue-500/10"
      >
        {/* Glow effect */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/10 to-purple-600/10 opacity-60 blur-xl -z-10"></div>
        
        {/* Animated border gradient */}
        <motion.div 
          className="absolute inset-0 rounded-2xl p-[1px]"
          style={{
            background: 'linear-gradient(90deg, #3b82f6, #8b5cf6, #ec4899, #3b82f6)',
            backgroundSize: '300% 300%',
          }}
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: "linear",
          }}
        >
          <div className="absolute inset-0 rounded-2xl bg-black/80 backdrop-blur-sm"></div>
        </motion.div>

        {/* Content */}
        <div className="relative z-20">
          {/* Back Button */}
          <motion.div whileHover={{ x: -5 }} whileTap={{ scale: 0.95 }}>
            <Link 
              href="/login" 
              className="flex items-center text-gray-400 hover:text-white transition-colors mb-6 group"
            >
              <ArrowLeft size={20} className="mr-2 group-hover:-translate-x-1 transition-transform" />
              Back to Login
            </Link>
          </motion.div>

          {/* Icon */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex justify-center mb-4"
          >
            <div className="p-4 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 shadow-lg shadow-blue-500/30">
              <Shield size={30} className="text-white" />
            </div>
          </motion.div>

          {/* Title */}
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-4xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 drop-shadow-lg"
          >
            Reset Password
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-gray-400 text-center mt-2 mb-8"
          >
            Enter your email to receive reset instructions
          </motion.p>

          {/* Success Message */}
          {message && (
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-4 p-4 rounded-xl bg-gradient-to-r from-green-900/30 to-emerald-900/30 border border-green-700/50 text-green-200 text-center"
            >
              {message}
            </motion.div>
          )}

          {/* Error Message */}
          {error && (
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-4 p-4 rounded-xl bg-gradient-to-r from-red-900/30 to-rose-900/30 border border-red-700/50 text-red-200 text-center"
            >
              {error}
            </motion.div>
          )}

          {/* Form */}
          <motion.form 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="space-y-6 relative z-10" 
            onSubmit={handleSubmit}
          >
            {/* Email */}
            <motion.div 
              whileFocus={{ scale: 1.01 }}
              className="relative"
            >
              <Mail className="absolute left-3 top-3 text-gray-400" size={20} />
              <input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full pl-10 pr-4 py-3 rounded-xl bg-black/40 text-white placeholder-gray-400 
                           focus:ring-2 focus:ring-blue-500 outline-none border border-white/10
                           transition-all duration-300 focus:shadow-lg focus:shadow-blue-500/20"
              />
            </motion.div>

            {/* Submit Button */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              disabled={loading}
              className="w-full py-3 rounded-xl font-semibold text-lg shadow-lg 
                         bg-gradient-to-r from-blue-600 to-purple-600 hover:from-purple-600 hover:to-pink-600 
                         text-white transition-all duration-300 disabled:opacity-50
                         flex items-center justify-center gap-2 group"
            >
              {loading ? (
                <>
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    className="w-5 h-5 rounded-full border-2 border-white/30 border-t-white"
                  />
                  Sending...
                </>
              ) : (
                <>
                  <Send size={20} className="group-hover:translate-x-1 transition-transform" />
                  Send Reset Instructions
                </>
              )}
            </motion.button>
          </motion.form>

          {/* Additional Info */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="mt-6 p-4 rounded-xl bg-gradient-to-r from-blue-900/20 to-indigo-900/20 border border-blue-700/30"
          >
            <p className="text-sm text-blue-200 text-center">
              You'll receive an email with a link to reset your password. 
              The link will expire in 1 hour for security reasons.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}