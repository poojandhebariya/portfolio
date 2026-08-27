import React, { useEffect, useRef } from "react";
import Typewriter from "typewriter-effect";
import { FiDownload, FiFileText } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import photo from "../Assets/photo.png";
import samplePDF1 from "../Assets/Poojan_Dhebariya_CV.pdf";

const Hero = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    // Animate elements on mount
    const elements = heroRef.current?.querySelectorAll(".hero-animate");
    elements?.forEach((el, i) => {
      setTimeout(
        () => {
          el.classList.add("visible");
        },
        200 + i * 150,
      );
    });
  }, []);

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-screen flex items-center overflow-hidden bg-dark-900"
    >
      {/* Background Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-100 pointer-events-none" />

      {/* Glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-violet-600/20 rounded-full blur-3xl pointer-events-none animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/15 rounded-full blur-3xl pointer-events-none animate-pulse [animation-delay:1.5s]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* LEFT: Text Content */}
          <div className="flex-1 text-center lg:text-left order-2 lg:order-1">
            {/* Greeting */}
            <p className="hero-animate animate-on-scroll text-slate-400 text-lg font-outfit font-medium mb-2">
              Hello, it's Me 👋
            </p>

            {/* Name */}
            <h1 className="hero-animate animate-on-scroll text-5xl lg:text-7xl font-outfit font-extrabold text-white leading-tight mb-4">
              Poojan <span className="gradient-text">Dhebariya</span>
            </h1>

            {/* Typewriter */}
            <div className="hero-animate animate-on-scroll flex items-center gap-3 justify-center lg:justify-start text-2xl lg:text-3xl font-outfit font-semibold mb-8">
              <span className="text-slate-300">I'm a</span>
              <Typewriter
                loop={Infinity}
                onInit={(typewriter) => {
                  typewriter
                    .typeString(
                      '<span style="color:#8b5cf6">Frontend Developer</span>',
                    )
                    .pauseFor(1500)
                    .deleteAll()
                    .typeString(
                      '<span style="color:#3b82f6">Backend Developer</span>',
                    )
                    .pauseFor(1500)
                    .deleteAll()
                    .typeString(
                      '<span style="color:#06b6d4">Full Stack Developer</span>',
                    )
                    .pauseFor(1500)
                    .deleteAll()
                    .start();
                }}
              />
            </div>

            {/* Description */}
            <p className="hero-animate animate-on-scroll text-slate-400 text-base leading-relaxed max-w-lg mx-auto lg:mx-0 mb-10">
              Passionate web developer crafting captivating digital experiences.
              Specializing in modern frontend architectures and scalable backend
              solutions.
            </p>

            {/* CTA Buttons */}
            <div className="hero-animate animate-on-scroll flex flex-wrap gap-4 justify-center lg:justify-start mb-10">
              <a
                href={samplePDF1}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 px-7 py-3.5 text-sm font-semibold text-white bg-gradient-to-r from-violet-600 to-blue-600 rounded-xl hover:from-violet-500 hover:to-blue-500 transition-all duration-300 hover:shadow-xl hover:shadow-violet-500/30 hover:scale-105 active:scale-95"
              >
                <FiDownload size={16} />
                Resume
              </a>
              <a
                href={samplePDF1}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 px-7 py-3.5 text-sm font-semibold text-white glass border border-white/15 rounded-xl hover:border-violet-500/40 hover:bg-violet-500/10 transition-all duration-300 hover:scale-105 active:scale-95"
              >
                <FiFileText size={16} />
                Cover Letter
              </a>
            </div>

            {/* Social Links */}
            <div className="hero-animate animate-on-scroll flex items-center gap-4 justify-center lg:justify-start">
              <a
                href="https://github.com/poojandhebariya"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-xl glass border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:border-violet-500/40 hover:bg-violet-500/10 transition-all duration-300 hover:scale-110"
              >
                <FaGithub size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/poojan-dhebariya-8b862123b"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-xl glass border border-white/10 flex items-center justify-center text-slate-400 hover:text-blue-400 hover:border-blue-500/40 hover:bg-blue-500/10 transition-all duration-300 hover:scale-110"
              >
                <FaLinkedin size={20} />
              </a>
            </div>
          </div>

          {/* RIGHT: Photo */}
          <div className="flex justify-center items-center order-1 lg:order-2">
            <div className="hero-animate animate-on-scroll relative">
              {/* Outer ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-violet-600 via-blue-600 to-cyan-500 animate-spin-slow p-[3px] blur-[1px]" />

              {/* Glow */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-violet-600/40 to-blue-600/40 blur-2xl scale-110 animate-pulse-glow" />

              {/* Photo container */}
              <div className="relative w-64 h-64 lg:w-80 lg:h-80 rounded-full p-[3px] bg-gradient-to-br from-violet-600 via-blue-600 to-cyan-500">
                <div className="w-full h-full rounded-full overflow-hidden bg-dark-800 border-4 border-dark-900">
                  <img
                    src={photo}
                    alt="Poojan Dhebariya"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Floating badges */}
              <div className="absolute -top-4 -right-4 glass border border-violet-500/30 rounded-xl px-3 py-2 text-xs font-medium text-violet-300 animate-float shadow-lg shadow-violet-500/20">
                ✨ Full Stack
              </div>
              <div className="absolute -bottom-4 -left-4 glass border border-blue-500/30 rounded-xl px-3 py-2 text-xs font-medium text-blue-300 animate-float-slow shadow-lg shadow-blue-500/20">
                🚀 React & Node
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
