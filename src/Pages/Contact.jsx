import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { FaPhone, FaLinkedin, FaGithub, FaInstagram, FaTwitter } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { FiSend, FiCheckCircle, FiAlertCircle } from 'react-icons/fi';

const socialLinks = [
  {
    icon: <FaLinkedin size={20} />,
    href: 'https://www.linkedin.com/in/poojan-dhebariya-8b862123b',
    label: 'LinkedIn',
    color: 'hover:text-blue-400 hover:border-blue-500/40 hover:bg-blue-500/10',
  },
  {
    icon: <FaGithub size={20} />,
    href: 'https://github.com/poojandhebariya',
    label: 'GitHub',
    color: 'hover:text-white hover:border-white/30 hover:bg-white/10',
  },
  {
    icon: <FaInstagram size={20} />,
    href: 'https://instagram.com',
    label: 'Instagram',
    color: 'hover:text-pink-400 hover:border-pink-500/40 hover:bg-pink-500/10',
  },
  {
    icon: <FaTwitter size={20} />,
    href: 'https://twitter.com',
    label: 'Twitter / X',
    color: 'hover:text-sky-400 hover:border-sky-500/40 hover:bg-sky-500/10',
  },
];

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toast, setToast] = useState(null); // { type: 'success'|'error', msg: '' }
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    emailjs
      .sendForm('service_spxk5qr', 'template_lrtjoyb', form.current, 'lZkUZmHhVItsG663d')
      .then(
        () => {
          setToast({ type: 'success', msg: 'Message sent! I\'ll get back to you soon 🎉' });
          setIsSubmitting(false);
          form.current.reset();
          setTimeout(() => setToast(null), 5000);
        },
        () => {
          setToast({ type: 'error', msg: 'Something went wrong. Please try again.' });
          setIsSubmitting(false);
          setTimeout(() => setToast(null), 5000);
        }
      );
  };

  return (
    <section id="contact" className="section-padding bg-dark-800 relative overflow-hidden">
      {/* BG */}
      <div className="absolute top-0 right-1/4 w-80 h-80 bg-violet-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-semibold uppercase tracking-widest text-violet-400 mb-3">Get In Touch</p>
          <h2 className="text-4xl lg:text-5xl font-outfit font-bold">
            <span className="text-white">Contact </span>
            <span className="gradient-text">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-violet-600 to-blue-600 rounded-full mx-auto mt-4" />
          <p className="text-slate-400 mt-6 max-w-lg mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach out!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* LEFT: Contact Info */}
          <div className="lg:col-span-2 flex flex-col gap-5">
            {/* Contact Cards */}
            <div className="glass border border-white/8 rounded-2xl p-6 flex items-center gap-5 hover:border-violet-500/30 transition-all duration-300 group">
              <div className="w-12 h-12 rounded-xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center text-violet-400 shrink-0 group-hover:scale-110 transition-transform duration-300">
                <FaPhone size={20} />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-1">Phone</p>
                <p className="text-white font-medium">+91 9023447966</p>
              </div>
            </div>

            <div className="glass border border-white/8 rounded-2xl p-6 flex items-center gap-5 hover:border-blue-500/30 transition-all duration-300 group">
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 shrink-0 group-hover:scale-110 transition-transform duration-300">
                <MdEmail size={22} />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-1">Email</p>
                <p className="text-white font-medium text-sm">poojandhebariya06@gmail.com</p>
              </div>
            </div>

            {/* Social Links */}
            <div className="glass border border-white/8 rounded-2xl p-6">
              <p className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-4">Find me on</p>
              <div className="grid grid-cols-2 gap-3">
                {socialLinks.map((link, i) => (
                  <a
                    key={i}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-3 px-4 py-3 rounded-xl glass border border-white/8 text-slate-400 text-sm font-medium transition-all duration-300 hover:scale-105 ${link.color}`}
                  >
                    {link.icon}
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT: Form */}
          <div className="lg:col-span-3">
            <div className="glass border border-white/8 rounded-2xl p-8 hover:border-violet-500/20 transition-all duration-300">
              <h3 className="text-xl font-outfit font-bold text-white mb-2">Send Me a Message</h3>
              <p className="text-slate-500 text-sm mb-8">
                If you have any work or queries, fill out the form and I'll get back to you.
              </p>

              <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-5">
                <div className="group">
                  <label className="block text-xs font-semibold uppercase tracking-widest text-slate-500 mb-2">Your Name</label>
                  <input
                    type="text"
                    name="user_name"
                    required
                    placeholder="John Doe"
                    className="w-full px-5 py-3.5 rounded-xl bg-dark-700 border border-white/8 text-white placeholder-slate-600 text-sm outline-none focus:border-violet-500/50 focus:shadow-[0_0_0_3px_rgba(139,92,246,0.1)] transition-all duration-300"
                  />
                </div>

                <div className="group">
                  <label className="block text-xs font-semibold uppercase tracking-widest text-slate-500 mb-2">Your Email</label>
                  <input
                    type="email"
                    name="user_email"
                    required
                    placeholder="john@example.com"
                    className="w-full px-5 py-3.5 rounded-xl bg-dark-700 border border-white/8 text-white placeholder-slate-600 text-sm outline-none focus:border-violet-500/50 focus:shadow-[0_0_0_3px_rgba(139,92,246,0.1)] transition-all duration-300"
                  />
                </div>

                <div className="group">
                  <label className="block text-xs font-semibold uppercase tracking-widest text-slate-500 mb-2">Message</label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    placeholder="Tell me about your project..."
                    className="w-full px-5 py-3.5 rounded-xl bg-dark-700 border border-white/8 text-white placeholder-slate-600 text-sm outline-none focus:border-violet-500/50 focus:shadow-[0_0_0_3px_rgba(139,92,246,0.1)] transition-all duration-300 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex items-center justify-center gap-2.5 w-full px-8 py-4 text-sm font-semibold text-white bg-gradient-to-r from-violet-600 to-blue-600 rounded-xl hover:from-violet-500 hover:to-blue-500 transition-all duration-300 hover:shadow-xl hover:shadow-violet-500/30 hover:scale-[1.02] active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  {isSubmitting ? (
                    <>
                      <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <FiSend size={16} />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Toast notification */}
      {toast && (
        <div
          className={`fixed bottom-8 right-8 z-50 flex items-center gap-3 px-6 py-4 rounded-2xl shadow-2xl border text-sm font-medium transition-all duration-500 ${
            toast.type === 'success'
              ? 'bg-emerald-900/80 border-emerald-500/30 text-emerald-300 shadow-emerald-500/20'
              : 'bg-red-900/80 border-red-500/30 text-red-300 shadow-red-500/20'
          } backdrop-blur-xl animate-slide-in`}
        >
          {toast.type === 'success' ? <FiCheckCircle size={20} /> : <FiAlertCircle size={20} />}
          {toast.msg}
        </div>
      )}
    </section>
  );
};

export default Contact;
