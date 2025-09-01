"use client";

import { useState, useRef } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Mail, Lock, Eye, EyeOff } from "lucide-react";
import Link from "next/link";
import ReCAPTCHA from "react-google-recaptcha";

export default function FuturisticLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const [captchaError, setCaptchaError] = useState<string | null>(null);
  const router = useRouter();
  const recaptchaRef = useRef<ReCAPTCHA>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!captchaToken) {
      setCaptchaError("⚠️ Please verify you are human");
      return;
    }

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
      recaptchaRef.current?.reset();
      setCaptchaToken(null);
      setCaptchaError(null);
    }
  };

  const handleGoogleSignIn = () => {
    // Redirect directly to Google's sign-in page
    window.location.href = "https://accounts.google.com/v3/signin/identifier?continue=https%3A%2F%2Fmail.google.com%2Fmail%2F&ifkv=AdBytiMI5cK3mcUBYloCH5jt_jQtIrrbidJPy63u84lSawPw88NdD9Wgq1rE6rJ46uIv7UyTFBPTwA&rip=1&sacu=1&service=mail&flowName=GlifWebSignIn&flowEntry=ServiceLogin&dsh=S-66959570%3A1756740745970407";
  };

  const handleCaptchaChange = (token: string | null) => {
    setCaptchaToken(token);
    if (token) {
      setCaptchaError(null);
    }
  };

  const handleCaptchaError = () => {
    setCaptchaError("reCAPTCHA failed to load. Please refresh the page.");
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

          {/* Password with show/hide toggle */}
          <div className="relative">
            <Lock className="absolute left-3 top-3 text-gray-400" size={20} />
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full pl-10 pr-12 py-3 rounded-xl bg-black/40 text-white placeholder-gray-400 
                         focus:ring-2 focus:ring-purple-500 outline-none border border-white/10"
            />
            {/* Show/Hide Password Toggle */}
            <button
              type="button"
              className="absolute right-3 top-3 text-gray-400 hover:text-gray-200 transition-colors"
              onClick={() => setShowPassword(!showPassword)}
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>

          {/* reCAPTCHA */}
          <div className="flex justify-center flex-col items-center">
            <ReCAPTCHA
              ref={recaptchaRef}
              sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI" // Test key - replace with your actual key
              onChange={handleCaptchaChange}
              onErrored={handleCaptchaError}
            />
            {captchaError && (
              <p className="text-red-400 text-sm mt-2">{captchaError}</p>
            )}
          </div>

          {/* Login Button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            type="submit"
            disabled={loading}
            className="w-full py-3 rounded-xl font-semibold text-lg shadow-lg 
                       bg-gradient-to-r from-blue-600 to-purple-600 hover:from-purple-600 hover:to-pink-600 
                       text-white transition-all duration-300 disabled:opacity-50"
          >
            {loading ? "Connecting..." : "Login"}
          </motion.button>
        </form>

        {/* Divider */}
        <div className="relative flex items-center justify-center my-6">
          <div className="border-t border-white/20 w-full"></div>
          <span className="bg-black px-3 text-gray-400 text-sm">Or</span>
          <div className="border-t border-white/20 w-full"></div>
        </div>

        {/* Google Sign-In Button */}
        <motion.button
          whileTap={{ scale: 0.95 }}
          onClick={handleGoogleSignIn}
          className="w-full py-3 rounded-xl font-semibold text-lg shadow-lg mb-6
                     bg-gradient-to-r from-red-600 to-orange-600 hover:from-orange-600 hover:to-red-600 
                     text-white transition-all duration-300 flex items-center justify-center gap-2"
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
            />
            <path
              fill="currentColor"
              d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
            />
            <path
              fill="currentColor"
              d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
            />
            <path
              fill="currentColor"
              d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
            />
          </svg>
          Sign in with Google
        </motion.button>

        {/* Extra Links */}
        <div className="mt-6 text-center text-gray-400">
          <Link href="../forget-password" className="text-sm text-blue-400 hover:underline">
            Forgot Password?
          </Link>
          <p className="text-sm mt-3">
            Don't have an account?
            <Link href="../register" className="text-purple-400 hover:underline">
              Sign Up
            </Link>
          </p>
        </div>
      </motion.div>
    </div>
  );
}