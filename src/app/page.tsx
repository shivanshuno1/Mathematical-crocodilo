"use client";

import Head from "next/head";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const headingRef = useRef(null);
  const subRef = useRef(null);
  const heroImageRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const sliderContent = [
    {
      title: "🤖 Robotics Integration",
      description:
        "Experience the synergy of AI and robotics — automation, precision, and reliability at its peak.",
      img: "/images/twitter-blue-checkmark-twitter-checkmark.gif",
    },
    {
      title: "📊 AI-Powered Analytics",
      description:
        "Visualize data with intelligent insights. Make smarter, faster, data-driven decisions.",
      img: "/images/analysis.gif",
    },
    {
      title: "🧠 Machine Learning",
      description:
        "Harness the power of neural networks to predict, adapt, and evolve solutions for tomorrow.",
      img: "/images/machine.gif",
    },
    {
      title: "🚀 Future of Innovation",
      description:
        "AI is not the future — it's the present. Stay ahead with continuous innovation and breakthroughs.",
      img: "/images/innovation.gif",
    },
  ];

  const features = [
    { icon: "⚡", title: "Real-time Processing", description: "Process data in milliseconds with our optimized AI algorithms" },
    { icon: "🔒", title: "Secure & Private", description: "Enterprise-grade security for all your data and processes" },
    { icon: "📈", title: "Scalable Infrastructure", description: "Grow without limits with our cloud-native architecture" },
    { icon: "🔄", title: "Continuous Learning", description: "Our models improve continuously with new data and feedback" },
  ];

  const nextSlide = () => setCurrentSlide((p) => (p === sliderContent.length - 1 ? 0 : p + 1));
  const prevSlide = () => setCurrentSlide((p) => (p === 0 ? sliderContent.length - 1 : p - 1));

  useEffect(() => {
    const sliderInterval = setInterval(nextSlide, 5000);

    // Hero Animations
    gsap.fromTo(
      headingRef.current,
      { y: 80, opacity: 0, filter: "blur(6px)" },
      { y: 0, opacity: 1, filter: "blur(0)", duration: 1.5, ease: "power3.out" }
    );
    gsap.fromTo(
      subRef.current,
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.2, ease: "power2.out", delay: 0.5 }
    );
    gsap.fromTo(
      heroImageRef.current,
      { scale: 1.3, opacity: 0 },
      { scale: 1, opacity: 1, duration: 1.5, ease: "power2.out", delay: 1 }
    );

    // Section Reveal
    gsap.utils.toArray<HTMLElement>(".reveal-section").forEach((section) => {
      gsap.fromTo(
        section,
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          ease: "power2.out",
          scrollTrigger: { trigger: section, start: "top 85%" },
        }
      );
    });

    return () => clearInterval(sliderInterval);
  }, []);

  useEffect(() => {
    gsap.fromTo(
      ".slider-active",
      { opacity: 0, x: 100 },
      { opacity: 1, x: 0, duration: 1, ease: "power2.out" }
    );
  }, [currentSlide]);

  return (
    <>
      <Head>
        <title>AI Robotics Platform</title>
        <meta name="description" content="Futuristic AI and Robotics Platform with advanced GSAP animations" />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        />
      </Head>

      <style jsx global>{`
       body {
          margin: 0;
          padding-top: 70px; /* ✅ fixes navbar overlap */
          background: #0a0a1a;
          color: white;
          font-family: "Poppins", sans-serif;
        }
        :root {
          --primary-gradient: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          --accent-color: #8a2be2;
          --dark-bg: #0a0a1a;
          --card-bg: rgba(255, 255, 255, 0.05);
          --text-light: rgba(255, 255, 255, 0.9);
        }
        
        body {
          margin: 0;
          background: var(--dark-bg);
          color: white;
          font-family: 'Poppins', sans-serif;
          overflow-x: hidden;
        }
        
        /* Navigation - FIXED: Removed transparency */
        .navbar {
          background: #0a0a1a !important; /* Changed from transparent to solid */
          padding: 1rem 2rem;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
        }
        
        .navbar-brand {
          font-weight: 700;
          font-size: 1.8rem;
          background: var(--primary-gradient);
          -webkit-background-clip: text;
         
        }
        
        .nav-link {
          color: rgba(255, 255, 255, 0.7) !important;
          font-weight: 500;
          margin: 0 0.8rem;
          transition: all 0.3s ease;
          position: relative;
        }
        
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -5px;
          left: 0;
          width: 0;
          height: 2px;
          background: var(--primary-gradient);
          transition: width 0.3s ease;
        }
        
        .nav-link:hover {
          color: white !important;
        }
        
        .nav-link:hover::after {
          width: 100%;
        }
        
        .navbar-toggler {
          border: none;
          color: white;
        }
        
        /* Hero Section */
        .hero {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, #0f2027, #203a43, #2c5364);
          text-align: center;
          padding: 6rem 2rem 2rem;
          position: relative;
          overflow: hidden;
        }
        
        .hero::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: radial-gradient(circle at 50% 50%, rgba(138, 43, 226, 0.15), transparent 70%);
        }
        
        .hero h1 {
          font-size: 3.5rem;
          font-weight: 800;
          margin-bottom: 1.5rem;
          text-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
        }
        
        .hero p {
          font-size: 1.4rem;
          max-width: 700px;
          margin: 0 auto 2rem;
          color: var(--text-light);
        }
        
        .hero-image {
          width: 220px;
          height: 220px;
          border-radius: 20px;
          object-fit: contain;
          margin: 2rem 0;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
          border: 2px solid rgba(255, 255, 255, 0.1);
        }
        
        .btn-hero {
          padding: 1rem 2.5rem;
          font-size: 1.1rem;
          font-weight: 600;
          border-radius: 50px;
          transition: all 0.3s ease;
          margin: 0 1rem;
        }
        
        .btn-primary {
          background: var(--primary-gradient);
          border: none;
          box-shadow: 0 5px 15px rgba(118, 75, 162, 0.4);
        }
        
        .btn-primary:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 25px rgba(118, 75, 162, 0.5);
        }
        
        .btn-outline-light {
          border: 2px solid rgba(255, 255, 255, 0.3);
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
        }
        
        .btn-outline-light:hover {
          background: rgba(255, 255, 255, 0.1);
          border-color: white;
          transform: translateY(-3px);
        }
        
        /* Neon Text Effect */
        .neon-text {
          color: #fff;
          text-shadow: 
            0 0 5px #0ff, 
            0 0 10px #0ff, 
            0 0 20px #0ff, 
            0 0 40px #0ff, 
            0 0 80px #0ff;
          position: relative;
          display: inline-block;
          overflow: hidden;
          background: linear-gradient(to right, #ff7e5f, #feb47b);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .neon-text::after {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(120deg, transparent, rgba(0,255,255,0.8), transparent);
          animation: shine 3s infinite;
        }

        @keyframes shine {
          0%   { left: -100%; }
          50%  { left: 100%; }
          100% { left: 100%; }
        }
        
        /* Slider Section */
        .slider-section {
          padding: 6rem 0;
          background: rgba(0, 0, 0, 0.3);
        }
        
        .section-title {
          font-size: 2.8rem;
          font-weight: 700;
          text-align: center;
          margin-bottom: 3rem;
          background: linear-gradient(to right, #00f2fe, #4facfe);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        
        .slider-container {
          max-width: 1000px;
          margin: 0 auto;
          position: relative;
          border-radius: 20px;
          overflow: hidden;
          background: var(--card-bg);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          padding: 2rem;
        }
        
        .slider-content {
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        
        .slider-img {
          width: 100%;
          height: 350px;
          object-fit: contain;
          border-radius: 15px;
          margin-bottom: 2rem;
        }
        
        .slider-text {
          text-align: center;
          max-width: 700px;
        }
        
        .slider-text h3 {
          font-size: 2rem;
          margin-bottom: 1rem;
          color: white;
        }
        
        .slider-text p {
          font-size: 1.2rem;
          color: var(--text-light);
          line-height: 1.6;
        }
        
        .slider-controls {
          position: absolute;
          top: 50%;
          width: 100%;
          display: flex;
          justify-content: space-between;
          padding: 0 1rem;
          transform: translateY(-50%);
        }
        
        .slider-btn {
          background: rgba(0, 0, 0, 0.5);
          border: none;
          color: white;
          width: 50px;
          height: 50px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.5rem;
          cursor: pointer;
          transition: all 0.3s ease;
          backdrop-filter: blur(5px);
        }
        
        .slider-btn:hover {
          background: rgba(255, 255, 255, 0.2);
          transform: scale(1.1);
        }
        
        .slider-indicators {
          display: flex;
          justify-content: center;
          gap: 1rem;
          margin-top: 2rem;
        }
        
        .slider-indicator {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.3);
          cursor: pointer;
          transition: all 0.3s ease;
        }
        
        .slider-indicator.active {
          background: white;
          transform: scale(1.2);
        }
        
        /* Features Section */
        .features-section {
          padding: 6rem 0;
          background: var(--dark-bg);
        }
        
        .feature-card {
          background: var(--card-bg);
          border-radius: 15px;
          padding: 2.5rem 2rem;
          text-align: center;
          height: 100%;
          transition: all 0.3s ease;
          border: 1px solid rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
        }
        
        .feature-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
          border-color: rgba(255, 255, 255, 0.2);
        }
        
        .feature-icon {
          font-size: 3rem;
          margin-bottom: 1.5rem;
        }
        
        .feature-card h4 {
          font-size: 1.5rem;
          margin-bottom: 1rem;
          color: white;
        }
        
        .feature-card p {
          color: var(--text-light);
          line-height: 1.6;
        }
        
        /* Content Sections */
        .content-section {
          padding: 6rem 0;
        }
        
        .content-section h2 {
          font-size: 2.5rem;
          margin-bottom: 2rem;
          text-align: center;
        }
        
        .content-section p {
          font-size: 1.2rem;
          max-width: 800px;
          margin: 0 auto 3rem;
          text-align: center;
          color: var(--text-light);
          line-height: 1.6;
        }
        
        .content-image {
          width: 100%;
          max-width: 800px;
          height: 400px;
          object-fit: contain;
          border-radius: 15px;
          margin: 0 auto;
          display: block;
        }
        
        /* CTA Section */
        .cta-section {
          padding: 6rem 0;
          background: linear-gradient(135deg, #0f2027, #203a43);
          text-align: center;
        }
        
        .cta-section h2 {
          font-size: 3rem;
          margin-bottom: 1.5rem;
        }
        
        .cta-section p {
          font-size: 1.3rem;
          max-width: 600px;
          margin: 0 auto 3rem;
          color: var(--text-light);
        }
        
        /* Footer */
        footer {
          background: #070711;
          padding: 4rem 0 2rem;
          text-align: center;
        }
        
        footer h4 {
          font-size: 2rem;
          margin-bottom: 1.5rem;
          background: var(--primary-gradient);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        
        .social-links {
          display: flex;
          justify-content: center;
          gap: 1.5rem;
          margin: 2rem 0;
        }
        
        .social-links a {
          color: white;
          font-size: 1.8rem;
          transition: all 0.3s ease;
        }
        
        .social-links a:hover {
          color: var(--accent-color);
          transform: translateY(-5px);
        }
        
        /* Responsive */
        @media (max-width: 992px) {
          .hero h1 {
            font-size: 2.8rem;
          }
          
          .hero p {
            font-size: 1.2rem;
          }
          
          .btn-hero {
            margin: 0.5rem;
          }
          
          .navbar-collapse {
            background: #0a0a1a; /* Changed from transparent to solid */
            padding: 1.5rem;
            border-radius: 10px;
            margin-top: 1rem;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
          }
        }
        
        @media (max-width: 768px) {
          .hero h1 {
            font-size: 2.2rem;
          }
          
          .section-title {
            font-size: 2.2rem;
          }
          
          .slider-img {
            height: 250px;
          }
        }
      `}</style>

      {/* Navigation Bar - FIXED: Solid background */}
      <nav className="navbar navbar-expand-lg navbar-dark fixed-top">
        <div className="container">
          <a className="navbar-brand" href="#">
            <span className="text-blue-500">AI</span> Robotics
          </a>
          <button 
            className="navbar-toggler" 
            type="button" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          
                <a className="nav-link" href="#">About</a>
            
       
                <a className="nav-link" href="#">Features</a>
          
              
                <a className="nav-link" href=" http://localhost:5173/">Tools</a>
               <a className="nav-link" href="#">Pricing</a>
 
            
                <a className="nav-link" href="./contact-us">Contact</a>
         
           
            <div className="d-flex">
              <button className="btn btn-outline-light me-2">Login</button>
              <button className="btn btn-primary">Sign Up</button>
            </div>
          </div>
        
      </nav>

      {/* Hero Section */}
      <div className="hero">
        <h1 ref={headingRef} className="neon-text">
          Welcome to the Future of AI & Robotics
        </h1>
        <p ref={subRef} className="lead">
          Where Artificial Intelligence Meets Innovation & Automation
        </p>
        <img
          ref={heroImageRef}
          src="/Images/twitter-blue-checkmark-twitter-checkmark.gif"
          alt="AI Robotics"
          className="hero-image floating"
        />
        <div className="mt-4">
          <button className="btn btn-primary btn-hero">
            Get Started <i className="fas fa-arrow-right ms-2"></i>
          </button>
          <button className="btn btn-outline-light btn-hero">
            View Demo <i className="fas fa-play-circle ms-2"></i>
          </button>
        </div>
      </div>

      {/* Slider Section */}
      <section className="slider-section reveal-section">
        <div className="container">
          <h2 className="section-title">Why Choose Our Platform?</h2>
          <div className="slider-container">
            <div key={currentSlide} className="slider-active slider-content">
              <img
                src={sliderContent[currentSlide].img}
                alt={sliderContent[currentSlide].title}
                className="slider-img"
              />
              <div className="slider-text">
                <h3>{sliderContent[currentSlide].title}</h3>
                <p>{sliderContent[currentSlide].description}</p>
              </div>
            </div>
            <div className="slider-controls">
              <button className="slider-btn" onClick={prevSlide}>
                ❮
              </button>
              <button className="slider-btn" onClick={nextSlide}>
                ❯
              </button>
            </div>
            <div className="slider-indicators">
              {sliderContent.map((_, index) => (
                <div
                  key={index}
                  className={`slider-indicator ${index === currentSlide ? 'active' : ''}`}
                  onClick={() => setCurrentSlide(index)}
                ></div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section reveal-section">
        <div className="container">
          <h2 className="section-title">Powerful Features</h2>
          <div className="row g-4">
            {features.map((feature, index) => (
              <div key={index} className="col-md-6 col-lg-3">
                <div className="feature-card">
                  <div className="feature-icon">{feature.icon}</div>
                  <h4>{feature.title}</h4>
                  <p>{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Robotics Section */}
      <section className="content-section reveal-section">
        <div className="container">
          <h2 className="section-title">🤖 Robotics Power</h2>
          <p>
            Our platform empowers robotics with intelligent AI modules that allow seamless automation,
            decision-making, and adaptability in real-time.
          </p>
          <img
            src="/Images/analysis.gif"
            className="content-image floating"
            alt="Robotics AI"
          />
        </div>
      </section>

      {/* Neural Networks Section */}
      <section className="content-section reveal-section">
        <div className="container">
          <h2 className="section-title">🧠 Neural Networks</h2>
          <p>
            Advanced machine learning frameworks power the future. Our neural engines adapt and learn
            continuously, bringing intelligence to every tool.
          </p>
          <img
            src="/Images/machine.gif"
            className="content-image floating"
            alt="Neural AI"
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section reveal-section">
        <div className="container">
          <h2>Ready to Transform Your Future?</h2>
          <p>Join thousands of innovators using our AI platform today</p>
          <button className="btn btn-primary btn-hero">
            Get Started Now <i className="fas fa-rocket ms-2"></i>
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="reveal-section">
        <div className="container">
          <h4>AI Robotics Platform</h4>
          <p>The future of artificial intelligence and automation</p>
          <div className="social-links">
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-linkedin"></i></a>
            <a href="#"><i className="fab fa-github"></i></a>
            <a href="#"><i className="fab fa-discord"></i></a>
          </div>
          <p className="mt-4">© 2025 AI Robotics Platform. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}