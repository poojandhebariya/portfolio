import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram, FaTwitter, FaHeart } from 'react-icons/fa';

const socialLinks = [
  { icon: <FaGithub size={18} />, href: 'https://github.com/poojandhebariya', label: 'GitHub' },
  { icon: <FaLinkedin size={18} />, href: 'https://www.linkedin.com/in/poojan-dhebariya-8b862123b', label: 'LinkedIn' },
  { icon: <FaInstagram size={18} />, href: 'https://instagram.com', label: 'Instagram' },
  { icon: <FaTwitter size={18} />, href: 'https://twitter.com', label: 'Twitter' },
];

const Footer = () => {
  return (
    <footer className="bg-dark-900 border-t border-white/5 py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-6">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <span className="text-white font-outfit font-bold text-base">Poojan Dhebariya</span>
        </div>

        {/* Nav */}
        <nav className="flex flex-wrap gap-6 justify-center text-sm text-slate-500">
          {['Home', 'About', 'Skills', 'Services', 'Projects', 'Contact'].map((item) => (
            <button
              key={item}
              onClick={() => {
                const el = document.getElementById(item.toLowerCase());
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="hover:text-violet-400 transition-colors duration-300"
            >
              {item}
            </button>
          ))}
        </nav>

        {/* Socials */}
        <div className="flex items-center gap-3">
          {socialLinks.map((link, i) => (
            <a
              key={i}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
              className="w-9 h-9 rounded-lg glass border border-white/8 flex items-center justify-center text-slate-500 hover:text-violet-400 hover:border-violet-500/30 transition-all duration-300 hover:scale-110"
            >
              {link.icon}
            </a>
          ))}
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        {/* Copyright */}
        <p className="text-slate-600 text-sm flex items-center gap-1.5">
          © {new Date().getFullYear()} Made with
          <FaHeart size={12} className="text-red-500 animate-pulse" />
          by Poojan Dhebariya
        </p>
      </div>
    </footer>
  );
};

export default Footer;
