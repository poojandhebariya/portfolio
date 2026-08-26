import React, { useEffect, useRef } from 'react';
import photo from '../Assets/photo1.png';
import { FiCode, FiBriefcase, FiLayers } from 'react-icons/fi';

const stats = [
  { icon: <FiBriefcase />, value: '4+', label: 'Projects Built' },
  { icon: <FiCode />, value: '1+', label: 'Year Experience' },
  { icon: <FiLayers />, value: '15+', label: 'Technologies' },
];

const About = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const els = entry.target.querySelectorAll('.animate-on-scroll, .animate-left, .animate-right');
            els.forEach((el, i) => {
              setTimeout(() => el.classList.add('visible'), i * 150);
            });
          }
        });
      },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="section-padding bg-dark-800 relative overflow-hidden">
      {/* BG decoration */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-violet-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-on-scroll">
          <p className="text-sm font-semibold uppercase tracking-widest text-violet-400 mb-3">Who I Am</p>
          <h2 className="text-4xl lg:text-5xl font-outfit font-bold">
            <span className="text-white">About </span>
            <span className="gradient-text">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-violet-600 to-blue-600 rounded-full mx-auto mt-4" />
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* LEFT: Photo */}
          <div className="flex-1 flex justify-center animate-left">
            <div className="relative">
              {/* Backdrop card */}
              <div className="absolute -inset-4 bg-gradient-to-br from-violet-600/20 to-blue-600/20 rounded-3xl blur-xl" />
              <div className="relative glass border border-white/10 rounded-3xl p-4 shadow-2xl">
                <img
                  src={photo}
                  alt="Poojan Dhebariya"
                  className="w-72 h-80 object-cover rounded-2xl"
                />
                {/* Decorative badge */}
                <div className="absolute -bottom-5 -right-5 glass border border-violet-500/30 rounded-2xl px-5 py-3 shadow-xl shadow-violet-500/20">
                  <p className="text-xs text-slate-400">Full Stack</p>
                  <p className="text-sm font-bold text-white">Developer</p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: Text */}
          <div className="flex-1 animate-right">
            <h3 className="text-2xl font-outfit font-bold text-white mb-6">
              Passionate about building exceptional digital experiences
            </h3>
            <p className="text-slate-400 leading-relaxed mb-6">
              I am a skilled web designer and developer. My passion lies in creating captivating
              website designs and implementing them through modern frontend and backend development.
              I take pride in staying up-to-date with current design trends and leveraging my 
              creativity to produce visually appealing and user-friendly websites.
            </p>
            <p className="text-slate-400 leading-relaxed mb-10">
              Throughout my career, I have developed a deep understanding of user experience (UX) 
              and user interface (UI) principles. By putting myself in the shoes of end-users, 
              I strive to create intuitive and seamless browsing experiences that align with brand identity.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              {stats.map((stat, i) => (
                <div
                  key={i}
                  className="glass border border-white/10 rounded-2xl p-5 text-center group hover:border-violet-500/40 hover:bg-violet-500/5 transition-all duration-300 glass-hover"
                >
                  <div className="text-violet-400 flex justify-center mb-2 text-lg group-hover:scale-110 transition-transform duration-300">
                    {stat.icon}
                  </div>
                  <p className="text-2xl font-outfit font-bold gradient-text">{stat.value}</p>
                  <p className="text-xs text-slate-500 mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
