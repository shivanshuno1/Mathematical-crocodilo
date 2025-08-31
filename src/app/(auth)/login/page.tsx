"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Mail, Lock } from "lucide-react";

export default function FuturisticLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const res = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });

    setLoading(false);

    if (!res?.error) {
      router.push("/");
    } else {
      alert("❌ Invalid email or password");
    }
  };

  return (
    <div className="relative flex items-center justify-center min-h-screen overflow-hidden bg-black">
      {/* Floating Orbs */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-blue-600/40 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-purple-600/40 rounded-full blur-3xl animate-pulse delay-1000"></div>

      {/* Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        whileHover={{ scale: 1.02 }}
        className="relative z-10 w-[90%] max-w-md p-8 rounded-2xl border border-white/20 shadow-2xl 
                   bg-gradient-to-br from-gray-900/80 via-black/70 to-gray-900/90 backdrop-blur-xl"
      >
        {/* Glowing Border */}
        <div className="absolute inset-0 rounded-2xl border-2 border-transparent bg-gradient-to-r from-blue-500 to-purple-600 opacity-40 blur-md"></div>

        {/* Title */}
        <h2 className="text-4xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 drop-shadow-lg">
          Welcome Back 🚀
        </h2>
        <p className="text-gray-400 text-center mt-2 mb-8">
          Sign in to enter the future
        </p>

        {/* Form */}
        <form className="space-y-6 relative z-10" onSubmit={handleSubmit}>
          {/* Email */}
          <div className="relative">
            <Mail className="absolute left-3 top-3 text-gray-400" size={20} />
            <input
              type="email"
              placeholder="Enter your email"
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
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full pl-10 pr-4 py-3 rounded-xl bg-black/40 text-white placeholder-gray-400 
                         focus:ring-2 focus:ring-purple-500 outline-none border border-white/10"
            />
          </div>

          {/* Button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            type="submit"
            disabled={loading}
            className="w-full py-3 rounded-xl font-semibold text-lg shadow-lg 
                       bg-gradient-to-r from-blue-600 to-purple-600 hover:from-purple-600 hover:to-pink-600 
                       text-white transition-all duration-300"
          >
            {loading ? "Connecting..." : "Login"}
          </motion.button>
        </form>

        {/* Extra Links */}
        <div className="mt-6 text-center text-gray-400">
          <a href="#" className="text-sm text-blue-400 hover:underline">
            Forgot Password?
          </a>
          <p className="text-sm mt-3">
            Don’t have an account?{" "}
            <a href="/register" className="text-purple-400 hover:underline">
              Sign Up
            </a>
          </p>
        </div>
      </motion.div>
    </div>
  );
}
