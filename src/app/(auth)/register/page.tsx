"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Mail, Lock, User } from "lucide-react";

export default function FuturisticRegister() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });

      if (res.ok) {
        alert("✅ Account created successfully");
        router.push("/login");
      } else {
        const data = await res.json();
        alert("❌ " + data.error || "Registration failed");
      }
    } catch (error) {
      alert("❌ Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative flex items-center justify-center min-h-screen overflow-hidden bg-black">
      {/* Floating Orbs */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-blue-600/40 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-pink-600/40 rounded-full blur-3xl animate-pulse delay-1000"></div>

      {/* Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        whileHover={{ scale: 1.02 }}
        className="relative z-10 w-[90%] max-w-md p-8 rounded-2xl border border-white/20 shadow-2xl 
                   bg-gradient-to-br from-gray-900/80 via-black/70 to-gray-900/90 backdrop-blur-xl"
      >
        {/* Neon Glow */}
        <div className="absolute inset-0 rounded-2xl border-2 border-transparent bg-gradient-to-r from-blue-500 to-pink-600 opacity-40 blur-md"></div>

        {/* Title */}
        <h2 className="text-4xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-pink-500 drop-shadow-lg">
          Create Account ✨
        </h2>
        <p className="text-gray-400 text-center mt-2 mb-8">
          Join us and step into the future
        </p>

        {/* Form */}
        <form className="space-y-6 relative z-10" onSubmit={handleSubmit}>
          {/* Name */}
          <div className="relative">
            <User className="absolute left-3 top-3 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full pl-10 pr-4 py-3 rounded-xl bg-black/40 text-white placeholder-gray-400 
                         focus:ring-2 focus:ring-blue-500 outline-none border border-white/10"
            />
          </div>

          {/* Email */}
          <div className="relative">
            <Mail className="absolute left-3 top-3 text-gray-400" size={20} />
            <input
              type="email"
              placeholder="Your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full pl-10 pr-4 py-3 rounded-xl bg-black/40 text-white placeholder-gray-400 
                         focus:ring-2 focus:ring-blue-500 outline-none border border-white/10"
            />
          </div>

          {/* Password */}
          <div className="relative">
            <Lock className="absolute left-3 top-3 text-gray-400" size={20} />
            <input
              type="password"
              placeholder="Create a password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full pl-10 pr-4 py-3 rounded-xl bg-black/40 text-white placeholder-gray-400 
                         focus:ring-2 focus:ring-pink-500 outline-none border border-white/10"
            />
          </div>

          {/* Button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            type="submit"
            disabled={loading}
            className="w-full py-3 rounded-xl font-semibold text-lg shadow-lg 
                       bg-gradient-to-r from-blue-600 to-pink-600 hover:from-purple-600 hover:to-blue-600 
                       text-white transition-all duration-300"
          >
            {loading ? "Creating..." : "Register"}
          </motion.button>
        </form>

        {/* Extra Links */}
        <div className="mt-6 text-center text-gray-400">
          <p className="text-sm">
            Already have an account?{" "}
            <a href="/login" className="text-blue-400 hover:underline">
              Login
            </a>
          </p>
        </div>
      </motion.div>
    </div>
  );
}
