// In your page.tsx login component
"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Mail, Lock, Eye, EyeOff } from "lucide-react";
import Link from "next/link";
import ReCAPTCHA from "react-google-recaptcha";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";

export default function FuturisticLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const [captchaError, setCaptchaError] = useState<string | null>(null);
  const router = useRouter();
  const recaptchaRef = useRef<ReCAPTCHA>(null);

  const handleCaptchaChange = (token: string | null) => {
    setCaptchaToken(token);
    if (token) setCaptchaError(null);
  };

  const handleCaptchaError = () => {
    setCaptchaError("⚠️ Captcha error. Please try again.");
    setCaptchaToken(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!captchaToken) {
      setCaptchaError("⚠️ Please verify you are human");
      return;
    }

    setLoading(true);

    try {
      const result = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

     if (result?.error) {
  alert('❌ Login failed: ' + result.error);
  recaptchaRef.current?.reset();
  setCaptchaToken(null);
  setCaptchaError(null);
} else {
  // Check if we're in a redirect loop by checking the previous page
  const previousPage = document.referrer;
  if (previousPage.includes('/login')) {
    // Force a hard redirect to break the loop
    window.location.href = '/';
  } else {
    // Use the router for normal navigation
    router.push('/');
    router.refresh();
  }
}
    } catch (error) {
      alert('❌ Network error. Please try again.');
      recaptchaRef.current?.reset();
      setCaptchaToken(null);
      setCaptchaError(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative flex items-center justify-center min-h-screen overflow-hidden bg-black">
      {/* Your JSX remains the same */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-blue-600/40 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-purple-600/40 rounded-full blur-3xl animate-pulse delay-1000"></div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        whileHover={{ scale: 1.02 }}
        className="relative z-10 w-[90%] max-w-md p-8 rounded-2xl border border-white/20 shadow-2xl 
                   bg-gradient-to-br from-gray-900/80 via-black/70 to-gray-900/90 backdrop-blur-xl"
      >
        <h2 className="text-4xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 drop-shadow-lg">
          Welcome Back 🚀
        </h2>
        <p className="text-gray-400 text-center mt-2 mb-8">Sign in to enter the future</p>

        <form className="space-y-6 relative z-10" onSubmit={handleSubmit}>
          {/* Email field */}
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

          {/* Password field */}
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
              sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
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

        {/* Extra Links */}
        <div className="mt-6 text-center text-gray-400">
          <Link href="../forget-password" className="text-sm text-blue-400 hover:underline">
            Forgot Password?
          </Link>
          <p className="text-sm mt-3">
            Don't have an account?{" "}
            <Link href="../register" className="text-purple-400 hover:underline">
              Sign Up
            </Link>
          </p>
        </div>
      </motion.div>
    </div>
  );
}