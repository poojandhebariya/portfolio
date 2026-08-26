import React, { useEffect, useRef } from 'react';
import { Services } from '../Data/Services';
import { FiArrowUpRight } from 'react-icons/fi';

const gradients = [
  { border: 'hover:border-blue-500/40', glow: 'hover:shadow-blue-500/10', badge: 'bg-blue-500/10 text-blue-400' },
  { border: 'hover:border-violet-500/40', glow: 'hover:shadow-violet-500/10', badge: 'bg-violet-500/10 text-violet-400' },
  { border: 'hover:border-emerald-500/40', glow: 'hover:shadow-emerald-500/10', badge: 'bg-emerald-500/10 text-emerald-400' },
];

const Service = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll('.service-card');
            cards.forEach((card, i) => {
              setTimeout(() => {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
              }, i * 150);
            });
          }
        });
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="services" ref={sectionRef} className="section-padding bg-dark-800 relative overflow-hidden">
      {/* BG */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-blue-600/8 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-violet-600/8 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-semibold uppercase tracking-widest text-violet-400 mb-3">What I Offer</p>
          <h2 className="text-4xl lg:text-5xl font-outfit font-bold">
            <span className="text-white">My </span>
            <span className="gradient-text">Services</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-violet-600 to-blue-600 rounded-full mx-auto mt-4" />
          <p className="text-slate-400 mt-6 max-w-lg mx-auto">
            End-to-end solutions from concept and design to development and deployment
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {Services.map((item, index) => (
            <div
              key={index}
              className={`service-card group glass border border-white/8 rounded-2xl p-8 transition-all duration-500 ${gradients[index % gradients.length].border} hover:shadow-2xl ${gradients[index % gradients.length].glow} hover:-translate-y-2 cursor-default`}
              style={{
                opacity: 0,
                transform: 'translateY(30px)',
                transition: 'opacity 0.6s ease, transform 0.6s ease, box-shadow 0.3s ease, border-color 0.3s ease',
              }}
            >
              {/* Icon */}
              <div className={`inline-flex w-14 h-14 items-center justify-center rounded-xl mb-6 ${gradients[index % gradients.length].badge} group-hover:scale-110 transition-transform duration-300`}>
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-outfit font-bold text-white mb-4 group-hover:gradient-text transition-all duration-300">
                {item.title}
              </h3>

              {/* Divider */}
              <div className="w-10 h-0.5 bg-gradient-to-r from-violet-600 to-blue-600 rounded-full mb-4 group-hover:w-full transition-all duration-500" />

              {/* Description */}
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                {item.desc}
              </p>

              {/* Learn More */}
              <div className="flex items-center gap-2 text-sm text-slate-500 group-hover:text-violet-400 transition-colors duration-300">
                <span>Learn more</span>
                <FiArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Service;
